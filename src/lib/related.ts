import type { CollectionEntry } from 'astro:content';
import { buildGuideNav, isPendingReclassification, routeIdOf, topLevelModuleSlugOf } from './guideNav';
import { slugify } from './slug';

type Article = CollectionEntry<'manual'>;

export interface RelatedLink {
  href: string;
  title: string;
  /** Ubicación corta: tema, submódulo o módulo. */
  context: string;
  /** Roles separados por "|", para el filtro por perfil (ProfileFilter). */
  profiles: string;
}

/** Resultado del cálculo automático, antes de mezclarlo con `related`. */
interface AutoRelated {
  prev: RelatedLink | null;
  next: RelatedLink | null;
  heading: string;
  related: Article[];
  max: number;
}

export interface RelatedContent {
  /** Artículo anterior en el orden del índice del módulo. */
  prev: RelatedLink | null;
  /** Siguiente artículo en el orden del índice del módulo. */
  next: RelatedLink | null;
  /** Título del bloque de enlaces («Relacionados», «Aparece en»…). */
  heading: string;
  related: RelatedLink[];
}

const MAX_RELATED = 3;
const MAX_GLOSSARY = 4;
const MIN_SCORE = 2;

const isGlossary = (a: Article) => a.data.module === 'Glosario';
const isListable = (a: Article) =>
  !isGlossary(a) && a.data.governance.status !== 'deprecated' && !isPendingReclassification(a);
const hrefOf = (a: Article) => `/manual/${routeIdOf(a.id)}/`;

const toLink = (a: Article): RelatedLink => ({
  href: hrefOf(a),
  title: a.data.title,
  context: a.data.subtopic || a.data.submodule || a.data.module,
  profiles: a.data.audience.map((x) => x.role).join('|'),
});

/**
 * Tarjeta «Sigue leyendo» del panel derecho del artículo.
 *
 * Primero van los artículos elegidos a mano en `related` (por `contentId`, en
 * ese orden); el cálculo automático completa hasta el máximo sin repetir
 * artículo ni título, ni el que ya aparece como «Siguiente».
 *
 * Documentación:
 * - `prev`/`next`: los artículos de antes y después en el índice lateral del
 *   módulo (paginador al final del artículo y «Siguiente» de la tarjeta).
 * - Relacionados: puntuación por cercanía en la estructura (mismo tema >
 *   mismo submódulo > mismo módulo) más las `entities` compartidas, ponderadas
 *   por rareza (IDF) para que entidades genéricas como «horas» pesen poco.
 * - Si no hay ninguno, «Más en ‹módulo›» con los primeros del índice.
 *
 * Glosario:
 * - «Aparece en»: artículos que enlazan el término en `relatedTerms`, lo
 *   tienen como entidad o lo llevan como palabra completa en el título.
 * - Si no hay ninguno, «Otros términos» de la misma área del glosario.
 */
export function getRelatedContent(entry: Article, all: Article[]): RelatedContent {
  const auto = isGlossary(entry) ? glossaryRelated(entry, all) : articleRelated(entry, all);
  const manual = manualRelated(entry, all);
  if (manual.length === 0) return { ...auto, related: uniqueByTitle(auto.related, auto.max, [entry]) };

  const exclude = [entry, ...all.filter((a) => hrefOf(a) === auto.next?.href)];
  const picked = uniqueByTitle(manual, manual.length, exclude);
  const filled = uniqueByTitle([...manual, ...auto.related], Math.max(auto.max, picked.length), exclude);
  // Si lo automático no aporta nada (respaldo «Más en…»/«Otros términos»), el
  // título genérico deja de tener sentido: todo es «Relacionados».
  return { prev: auto.prev, next: auto.next, heading: auto.heading === 'Aparece en' ? auto.heading : 'Relacionados', related: filled };
}

const warned = new Set<string>();

/** Artículos de `related` que existen; avisa en la consola de los que no. */
function manualRelated(entry: Article, all: Article[]): Article[] {
  if (entry.data.related.length === 0) return [];
  const byContentId = new Map(all.map((a) => [a.data.contentId, a]));
  const found: Article[] = [];
  for (const id of entry.data.related) {
    const target = byContentId.get(id);
    const problem = !target
      ? 'no existe ningún artículo con ese contentId'
      : target.data.governance.status === 'deprecated'
        ? 'el artículo está obsoleto (deprecated)'
        : target === entry
          ? 'es el propio artículo'
          : null;
    if (!problem) found.push(target!);
    else if (!warned.has(`${entry.id}|${id}`)) {
      warned.add(`${entry.id}|${id}`);
      console.warn(`⚠ related en ${entry.id}: «${id}» se ignora (${problem}).`);
    }
  }
  return found;
}

function glossaryRelated(entry: Article, all: Article[]): AutoRelated {
  // El título a veces es una frase («Turno en aTurnos»): por eso también se usa
  // el nombre del archivo (`turno`). Las entidades del término no, porque suelen
  // ser palabras sueltas («anual», «app») que traen ruido.
  const terms = [entry.data.title, routeIdOf(entry.id).split('/').pop() ?? '', ...entry.data.synonyms]
    .map(slugify)
    .filter(Boolean);
  const matchScore = (a: Article) => {
    if (a.data.relatedTerms.some((t) => terms.includes(slugify(t)))) return 3;
    if (a.data.entities.some((e) => terms.includes(slugify(e.id)) || terms.includes(slugify(e.label)))) return 2;
    const title = `-${slugify(a.data.title)}-`;
    return terms.some((t) => title.includes(`-${t}-`)) ? 1 : 0;
  };
  const usedIn = all
    .filter(isListable)
    .map((a) => ({ a, score: matchScore(a) }))
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score || x.a.data.title.length - y.a.data.title.length)
    .map((x) => x.a);
  if (usedIn.length > 0) return { prev: null, next: null, heading: 'Aparece en', related: usedIn, max: MAX_GLOSSARY };

  const siblings = all
    .filter((a) => isGlossary(a) && a.id !== entry.id && a.data.submodule === entry.data.submodule)
    .sort((x, y) => x.data.title.localeCompare(y.data.title, 'es'));
  return { prev: null, next: null, heading: 'Otros términos', related: siblings, max: MAX_GLOSSARY };
}

function articleRelated(entry: Article, all: Article[]): AutoRelated {
  const currentId = routeIdOf(entry.id);
  const moduleSlug = topLevelModuleSlugOf(entry.id);
  const byRouteId = new Map(all.map((a) => [routeIdOf(a.id), a]));
  const order = moduleReadingOrder(all, moduleSlug);

  const index = order.indexOf(currentId);
  const nextEntry = index >= 0 ? byRouteId.get(order[index + 1] ?? '') : undefined;
  const next = nextEntry ? toLink(nextEntry) : null;
  const prevEntry = index > 0 ? byRouteId.get(order[index - 1]) : undefined;
  const prev = prevEntry ? toLink(prevEntry) : null;

  const candidates = all.filter((a) => isListable(a) && routeIdOf(a.id) !== currentId);

  const docFreq = new Map<string, number>();
  for (const a of candidates) for (const e of a.data.entities) docFreq.set(e.id, (docFreq.get(e.id) ?? 0) + 1);
  const idf = (id: string) => Math.log((candidates.length + 1) / ((docFreq.get(id) ?? 0) + 1));

  const d = entry.data;
  const ownEntities = new Set(d.entities.map((e) => e.id));
  const scored = candidates
    .filter((a) => hrefOf(a) !== next?.href)
    .map((a) => {
      let score = 0;
      if (topLevelModuleSlugOf(a.id) === moduleSlug && a.data.module === d.module) {
        score += 0.5;
        if (a.data.submodule === d.submodule) {
          score += 2;
          if (d.subtopic && a.data.subtopic === d.subtopic) score += 2;
        }
      }
      for (const e of a.data.entities) if (ownEntities.has(e.id)) score += idf(e.id) / 2;
      return { a, score };
    })
    .filter((x) => x.score >= MIN_SCORE)
    .sort(
      (x, y) =>
        y.score - x.score ||
        x.a.data.order - y.a.data.order ||
        x.a.data.title.localeCompare(y.a.data.title, 'es'),
    )
    .map((x) => x.a);
  if (scored.length > 0) return { prev, next, heading: 'Relacionados', related: scored, max: MAX_RELATED };

  const moduleStart = order
    .filter((id) => id !== currentId && `/manual/${id}/` !== next?.href)
    .map((id) => byRouteId.get(id))
    .filter((a): a is Article => Boolean(a));
  return { prev, next, heading: `Más en ${d.module}`, related: moduleStart, max: MAX_RELATED };
}

/** Ids de artículo en el mismo orden en que aparecen en el índice lateral. */
function moduleReadingOrder(all: Article[], moduleSlug: string): string[] {
  const nav = buildGuideNav(all, moduleSlug);
  const ids: string[] = [];
  const push = (id?: string) => id && !ids.includes(id) && ids.push(id);
  for (const group of nav.groups) {
    push(group.overviewId);
    group.looseArticles.forEach((a) => push(a.id));
    for (const sub of group.subtopics) {
      push(sub.overviewId);
      sub.articles.forEach((a) => push(a.id));
    }
  }
  return ids;
}

/** Primeros `max` artículos sin repetir artículo ni título (p. ej. versión web
 *  y app del mismo tema), dejando fuera los de `exclude`. */
function uniqueByTitle(articles: Article[], max: number, exclude: Article[] = []): RelatedLink[] {
  const seenIds = new Set(exclude.map((a) => a.id));
  const seen = new Set(exclude.map((a) => slugify(a.data.title)));
  const links: RelatedLink[] = [];
  for (const a of articles) {
    const key = slugify(a.data.title);
    if (seenIds.has(a.id) || seen.has(key)) continue;
    seenIds.add(a.id);
    seen.add(key);
    links.push(toLink(a));
    if (links.length === max) break;
  }
  return links;
}
