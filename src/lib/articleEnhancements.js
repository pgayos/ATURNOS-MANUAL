// Mejoras de lectura de la página de artículo (ArticleLayout):
// - índice «En esta página» que marca la sección que se está leyendo,
// - barra de progreso de lectura,
// - enlace copiable en los encabezados (h2/h3),
// - zoom de capturas en un <dialog>,
// - atajos ← / → del paginador.
//
// Con la navegación sin recarga (ClientRouter) el script del layout solo se
// ejecuta una vez: initArticleEnhancements() se vuelve a llamar tras cada
// cambio de página y `signal` retira los listeners globales de la anterior.

/** Marca en el índice la sección visible y actualiza la barra de progreso. */
function initReadingTracking({ body, index, progress }, signal) {
  const links = index ? [...index.querySelectorAll('a[href^="#"]')] : [];
  const sections = links
    .map((link) => {
      const id = decodeURIComponent(link.getAttribute("href").slice(1));
      return { link, heading: document.getElementById(id) };
    })
    .filter((s) => s.heading);

  // Una sección pasa a ser la activa cuando su título sube por encima de esta
  // línea (justo bajo la cabecera fija).
  const ACTIVE_LINE = 140;
  let active = null;

  const update = () => {
    if (sections.length > 0) {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      let current = null;
      if (atBottom) current = sections[sections.length - 1];
      else
        for (const s of sections)
          if (s.heading.getBoundingClientRect().top <= ACTIVE_LINE) current = s;
      if (current !== active) {
        active?.link.classList.remove("is-active");
        active?.link.removeAttribute("aria-current");
        current?.link.classList.add("is-active");
        current?.link.setAttribute("aria-current", "location");
        active = current;
      }
    }

    if (progress && body) {
      const rect = body.getBoundingClientRect();
      const total = rect.height - window.innerHeight + ACTIVE_LINE;
      // Artículos que caben en pantalla: no tiene sentido mostrar progreso.
      progress.hidden = total <= 0;
      if (total > 0) {
        const ratio = Math.min(1, Math.max(0, (ACTIVE_LINE - rect.top) / total));
        progress.style.transform = `scaleX(${ratio})`;
      }
    }
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true, signal });
  window.addEventListener("resize", onScroll, { signal });
  // Las imágenes diferidas cambian la altura del artículo al cargarse.
  body?.querySelectorAll("img").forEach((img) =>
    img.addEventListener("load", onScroll, { once: true }),
  );
  update();
}

/** Añade a cada h2/h3 con id un botón que copia el enlace a esa sección. */
function initHeadingAnchors(body) {
  body.querySelectorAll("h2[id], h3[id]").forEach((heading) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "heading-anchor";
    button.setAttribute("aria-label", `Copiar enlace a «${heading.textContent.trim()}»`);
    button.title = "Copiar enlace a esta sección";
    button.textContent = "#";
    button.addEventListener("click", async () => {
      const url = new URL(window.location.href);
      url.hash = heading.id;
      // Conserva el estado del historial (lo usa la navegación sin recarga).
      history.replaceState(history.state, "", url.hash);
      try {
        await navigator.clipboard.writeText(url.href);
        button.dataset.copied = "Enlace copiado";
      } catch {
        // Sin permiso de portapapeles: al menos la URL ya lleva el ancla.
        button.dataset.copied = "Copia la URL de la barra";
      }
      clearTimeout(button._timer);
      button._timer = setTimeout(() => delete button.dataset.copied, 1800);
    });
    heading.append(button);
  });
}

/** Abre las capturas en grande al hacer clic (solo si se ven reducidas). */
function initImageZoom(body, dialog) {
  if (!dialog) return;
  const zoomImg = dialog.querySelector("img");
  const caption = dialog.querySelector("figcaption");

  const markIfZoomable = (img) => {
    // Iconos y capturas pequeñas que ya se ven a tamaño real no se amplían.
    if (img.naturalWidth > img.clientWidth + 40) {
      img.classList.add("is-zoomable");
      img.tabIndex = 0;
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `Ampliar imagen${img.alt ? `: ${img.alt}` : ""}`);
    }
  };

  const open = (img) => {
    zoomImg.src = img.currentSrc || img.src;
    zoomImg.alt = img.alt;
    caption.textContent = img.alt;
    caption.hidden = !img.alt;
    dialog.showModal();
  };

  body.querySelectorAll("img").forEach((img) => {
    if (img.closest("a")) return; // la imagen ya es un enlace
    if (img.complete) markIfZoomable(img);
    else img.addEventListener("load", () => markIfZoomable(img), { once: true });
    img.addEventListener("click", () => img.classList.contains("is-zoomable") && open(img));
    img.addEventListener("keydown", (e) => {
      if (!img.classList.contains("is-zoomable")) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(img);
      }
    });
  });

  // Cualquier clic (en la imagen o fuera) cierra; Esc lo cierra el <dialog>.
  dialog.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => zoomImg.removeAttribute("src"));
}

/**
 * Atajos ← / → para ir al artículo anterior / siguiente del paginador.
 * No actúan mientras se escribe, con modificadores (Alt+← es «Atrás» del
 * navegador), con un diálogo abierto o si el enlace está oculto por el rol.
 */
function initPagerShortcuts(signal) {
  const prev = document.querySelector(".article-pager-link.is-prev");
  const next = document.querySelector(".article-pager-link.is-next");
  if (!prev && !next) return;

  const isTyping = (el) =>
    el instanceof HTMLElement &&
    (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

  document.addEventListener("keydown", (e) => {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (isTyping(e.target) || document.querySelector("dialog[open]")) return;
    const link = e.key === "ArrowLeft" ? prev : e.key === "ArrowRight" ? next : null;
    if (!link || link.hidden) return;
    e.preventDefault();
    link.click();
  }, { signal });
}

let controller;

export function initArticleEnhancements() {
  controller?.abort();
  controller = new AbortController();
  const { signal } = controller;

  initPagerShortcuts(signal);
  const body = document.querySelector(".article-body");
  initReadingTracking(
    {
      body,
      index: document.querySelector(".panel-index"),
      progress: document.querySelector("[data-reading-progress]"),
    },
    signal,
  );
  if (!body) return;
  initHeadingAnchors(body);
  initImageZoom(body, document.querySelector("[data-image-zoom]"));
}
