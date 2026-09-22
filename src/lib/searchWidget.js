// Widget de búsqueda con sugerencias en vivo (usado por el buscador del
// header, visible en todas las páginas, y por el de la portada). Consulta
// /search-index.json (generado desde las Content Collections, ver
// src/pages/search-index.json.ts) en vez de Pagefind, para funcionar igual
// en `astro dev` que en producción.

const CATEGORY_ORDER = [
  'Cómo empezar',
  'Documentación',
  'App móvil',
  'Implantación',
  'Hardware',
  'Glosario',
];
const categoryRank = (category) => {
  const rank = CATEGORY_ORDER.indexOf(category);
  return rank === -1 ? CATEGORY_ORDER.length : rank;
};

const normalize = (str) =>
  (str || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

// Compartido entre todas las instancias del widget en la misma página (hero
// + header), así solo se pide el índice una vez.
let indexPromise;
const loadIndex = () => {
  if (!indexPromise) {
    indexPromise = fetch('/search-index.json').then((res) => res.json());
  }
  return indexPromise;
};

const matches = (items, query) => {
  const q = normalize(query);
  const scored = [];
  for (const item of items) {
    const title = normalize(item.title);
    const category = normalize(item.category);
    const synonyms = normalize((item.synonyms || []).join(' '));
    const description = normalize(item.description);
    let score = 0;
    if (title.startsWith(q)) score = 5;
    else if (title.includes(q)) score = 4;
    else if (category.includes(q)) score = 3;
    else if (synonyms.includes(q)) score = 2;
    else if (description.includes(q)) score = 1;
    if (score) scored.push({ item, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.map((entry) => entry.item);
};

const MAX_SUGGESTIONS = 6;
const MIN_DROPDOWN_WIDTH = 320;

/**
 * @param {{ form: HTMLFormElement, input: HTMLInputElement, suggestions: HTMLElement, backdrop?: HTMLElement | null }} config
 */
export function initSearchWidget({ form, input, suggestions, backdrop }) {
  if (!form || !input || !suggestions) return;
  let timer;

  const showBackdrop = () => backdrop?.classList.add('is-active');
  const hideBackdrop = () => backdrop?.classList.remove('is-active');

  const positionSuggestions = () => {
    const rect = form.getBoundingClientRect();
    const top = rect.bottom + 8;
    const width = Math.max(rect.width, MIN_DROPDOWN_WIDTH);
    let left = rect.left;
    if (left + width > window.innerWidth - 16) left = window.innerWidth - 16 - width;
    if (left < 16) left = 16;
    suggestions.style.left = `${left}px`;
    suggestions.style.top = `${top}px`;
    suggestions.style.width = `${width}px`;
    suggestions.style.maxHeight = `${Math.max(160, window.innerHeight - top - 16)}px`;
  };

  const closeSuggestions = () => {
    suggestions.hidden = true;
    suggestions.replaceChildren();
    input.setAttribute('aria-expanded', 'false');
  };

  const deactivateSearch = () => {
    closeSuggestions();
    hideBackdrop();
  };

  const renderSuggestions = (allResults, query) => {
    suggestions.replaceChildren();
    if (!allResults.length) {
      closeSuggestions();
      return;
    }
    const shown = allResults.slice(0, MAX_SUGGESTIONS);

    const groups = new Map();
    for (const data of shown) {
      if (!groups.has(data.category)) groups.set(data.category, []);
      groups.get(data.category).push(data);
    }
    const orderedGroups = [...groups.entries()].sort(
      (a, b) => categoryRank(a[0]) - categoryRank(b[0]),
    );

    for (const [category, items] of orderedGroups) {
      const heading = document.createElement('div');
      heading.className = 'hero-suggestion-group';
      heading.textContent = category;
      suggestions.append(heading);

      for (const data of items) {
        const item = document.createElement('a');
        item.className = 'hero-suggestion';
        item.href = data.url;
        item.setAttribute('role', 'option');
        item.textContent = data.title;
        suggestions.append(item);
      }
    }

    if (allResults.length > shown.length) {
      const more = document.createElement('a');
      more.className = 'hero-suggestion-more';
      more.href = `/buscar/?q=${encodeURIComponent(query)}`;
      more.textContent = 'Ver todos los resultados →';
      suggestions.append(more);
    }

    positionSuggestions();
    suggestions.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  };

  async function runSuggestions() {
    const query = input.value.trim();
    if (!query) {
      closeSuggestions();
      return;
    }
    try {
      const items = await loadIndex();
      renderSuggestions(matches(items, query), query);
    } catch (error) {
      closeSuggestions();
    }
  }

  input.addEventListener('input', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(runSuggestions, 180);
  });
  input.addEventListener('focus', () => {
    showBackdrop();
    if (input.value.trim() && suggestions.childElementCount) {
      positionSuggestions();
      suggestions.hidden = false;
    }
  });
  input.addEventListener('blur', () => {
    window.setTimeout(() => {
      const active = document.activeElement;
      if (!form.contains(active) && !suggestions.contains(active)) {
        deactivateSearch();
      }
    }, 120);
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      deactivateSearch();
      input.blur();
    }
  });
  document.addEventListener('click', (event) => {
    if (!form.contains(event.target) && !suggestions.contains(event.target)) {
      deactivateSearch();
    }
  });
  window.addEventListener(
    'scroll',
    () => {
      if (!suggestions.hidden) positionSuggestions();
    },
    { passive: true },
  );
  window.addEventListener('resize', () => {
    if (!suggestions.hidden) positionSuggestions();
  });
}
