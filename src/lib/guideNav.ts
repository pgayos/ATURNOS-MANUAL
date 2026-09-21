import type { CollectionEntry } from 'astro:content';
import { slugify } from './slug';

type Article = CollectionEntry<'manual'>;

/**
 * Todo módulo (excepto Glosario, que tiene su propio listado A-Z) se lee de
 * principio a fin como un manual único: en lugar de páginas de cards por
 * submódulo/tema, al entrar al módulo se salta al primer artículo, y cada
 * artículo muestra a la izquierda el índice completo del módulo (submódulos →
 * temas → artículos) en su orden real de lectura.
 *
 * Por defecto, submódulos y temas se ordenan alfabéticamente. `GUIDE_MODULES`
 * es solo para personalizar ese orden a mano en un módulo puntual (como se
 * hizo con "Empezar en aTurnos") o para "aplanar" un submódulo — no hace
 * falta agregar una entrada aquí para que un módulo tenga sidebar.
 */
interface GuideModuleConfig {
  submoduleOrder: string[];
  /**
   * Submódulos que se "aplanan": sus temas suben a submódulo de primer nivel y
   * el envoltorio desaparece del índice. Su artículo de portada, si lo tiene,
   * sigue siendo la portada del módulo (el enlace del título).
   */
  flattenSubmodules?: string[];
}

export const GUIDE_MODULES: Record<string, GuideModuleConfig> = {
  'empezar-en-aturnos': {
    submoduleOrder: [
      'Introducción',
      'Comienza en aTurnos',
      'Vacaciones y permisos (absentismos)',
      'El Cuadrante',
      'Control horario',
      'Guías por rol',
    ],
    flattenSubmodules: ['Comienza en aTurnos'],
  },
  'gestion-de-proyectos': {
    submoduleOrder: [
      'Introducción',
      'Análisis Funcional',
      'Proceso de Implantación',
      'Fin de fase de Implantación',
      'Plan de Formación para la Implantación',
    ],
  },
  'integracion-biostar': {
    submoduleOrder: ['Introducción', 'Manual de dispositivos Biostar'],
  },
};

// Glosario es el único módulo con formato distinto (listado A-Z con
// buscador); cualquier otro módulo usa la navegación de sidebar.
export function isGuideModule(moduleSlug: string): boolean {
  return moduleSlug !== 'glosario';
}

export function isFlattenedSubmodule(moduleSlug: string, submodule: string): boolean {
  return (GUIDE_MODULES[moduleSlug]?.flattenSubmodules ?? []).includes(submodule);
}

export interface GuideNavArticle {
  id: string;
  title: string;
  order: number;
  /** Roles de audience del artículo (p. ej. ["Trabajador", "Administrador"]),
   *  para poder atenuar en el sidebar los artículos que no aplican al rol
   *  seleccionado por el visitante. */
  audience: string[];
}

export interface GuideNavSubtopic {
  name: string;
  slug: string;
  /** artículo de portada del tema (su título coincide con el nombre del tema);
   *  se muestra como enlace en la cabecera, no como un ítem repetido. */
  overviewId?: string;
  overviewAudience?: string[];
  articles: GuideNavArticle[];
}

export interface GuideNavGroup {
  name: string;
  slug: string;
  /** artículo de portada del submódulo (mismo criterio que en los temas). */
  overviewId?: string;
  overviewAudience?: string[];
  looseArticles: GuideNavArticle[];
  subtopics: GuideNavSubtopic[];
}

export interface GuideNav {
  moduleName: string;
  moduleSlug: string;
  groups: GuideNavGroup[];
  /** id del primer artículo del módulo, p. ej. "empezar-en-aturnos/1-comienza-en-aturnos" */
  firstArticleId: string;
}

/**
 * Carpetas puramente organizativas: agrupan módulos en disco para que sean
 * fáciles de ubicar (p. ej. `manual/planificacion/...`), pero no significan
 * nada para la navegación ni deben aparecer en la URL. `routeIdOf` las quita
 * del id antes de usarlo para construir rutas, comparar artículos o agrupar
 * por módulo — a partir de aquí, todo el código trata el resultado como "el
 * id real" del artículo. Si se crea una carpeta contenedora nueva, solo hace
 * falta añadirla aquí.
 */
const NON_ROUTING_WRAPPERS = ['manual', 'integraciones-y-hardware'];

export function routeIdOf(rawId: string): string {
  const [first, ...rest] = rawId.split('/');
  return NON_ROUTING_WRAPPERS.includes(first) && rest.length > 0 ? rest.join('/') : rawId;
}

const moduleSlugOf = (entry: Article) => routeIdOf(entry.id).split('/').slice(0, -1).join('/');

/**
 * A qué módulo "contenedor" pertenece un artículo por su ruta efectiva (ya
 * sin carpetas contenedoras puramente organizativas): siempre el primer
 * segmento. Para la inmensa mayoría de artículos coincide con `moduleSlugOf`
 * (no hay subcarpetas reales), pero en el caso de
 * app-movil/<módulo-web>/archivo.md (ver "El caso de App" en
 * templateManual.md) el módulo contenedor sigue siendo "app-movil", aunque
 * `moduleSlugOf` para ese artículo dé "app-movil/<módulo-web>". Esto es lo que
 * deben usar las páginas que parten de un artículo concreto (breadcrumb,
 * sidebar) para saber a qué pill/índice de navegación pertenece.
 */
export const topLevelModuleSlugOf = (entryId: string) => routeIdOf(entryId).split('/')[0];

const byOrder = (a: Article, b: Article) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, 'es');

const toNavArticle = (a: Article): GuideNavArticle => ({
  id: routeIdOf(a.id),
  title: a.data.title,
  order: a.data.order,
  audience: a.data.audience.map((item) => item.role),
});

/** ¿El título del artículo es el de la sección (mismo texto o "<sección> …")? */
const isSectionOverview = (articleTitle: string, sectionName: string) => {
  const a = slugify(articleTitle);
  const s = slugify(sectionName);
  return a === s || a.startsWith(`${s}-`);
};

/** Si el primer artículo es la portada de la sección, lo saca de la lista y
 *  devuelve su id (y audience) para usarlo como enlace de cabecera. */
const extractOverview = (
  articles: GuideNavArticle[],
  sectionName: string,
): { id: string; audience: string[] } | undefined => {
  if (articles[0] && isSectionOverview(articles[0].title, sectionName)) {
    const overview = articles.shift()!;
    return { id: overview.id, audience: overview.audience };
  }
  return undefined;
};

function groupBy<T>(items: T[], key: (item: T) => string): Map<string, T[]> {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const k = key(item);
    const list = map.get(k);
    if (list) list.push(item);
    else map.set(k, [item]);
  }
  return map;
}

export function buildGuideNav(entries: Article[], moduleSlug: string): GuideNav {
  const config = GUIDE_MODULES[moduleSlug];
  const submoduleOrder = config?.submoduleOrder ?? [];
  const orderOf = (name: string) => {
    const index = submoduleOrder.indexOf(name);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  };

  // Un módulo puede tener contenido en subcarpetas propias (p. ej.
  // app-movil/control-horario/, ver "El caso de App" en templateManual.md):
  // esos artículos también pertenecen al módulo aunque su ruta tenga un
  // segmento extra, así que se incluyen por prefijo, no solo por igualdad.
  const inModule = entries.filter((entry) => {
    const entrySlug = moduleSlugOf(entry);
    return entrySlug === moduleSlug || entrySlug.startsWith(`${moduleSlug}/`);
  });
  const moduleName =
    inModule.find((entry) => moduleSlugOf(entry) === moduleSlug)?.data.module ??
    inModule[0]?.data.module ??
    moduleSlug;

  // Para un artículo en subcarpeta, su "submodule" real (p. ej. "General" de
  // Control horario) no es el nivel que corresponde en este árbol: aquí lo
  // que agrupa es el módulo web al que pertenece (su `module`, p. ej.
  // "Control horario"), y su propio submodule pasa a hacer de tema/subtopic.
  const groupKeyOf = (entry: Article) =>
    moduleSlugOf(entry) === moduleSlug ? entry.data.submodule : entry.data.module;
  const subtopicKeyOf = (entry: Article): string | undefined =>
    moduleSlugOf(entry) === moduleSlug ? entry.data.subtopic : entry.data.submodule;

  const groups: GuideNavGroup[] = [...groupBy(inModule, groupKeyOf).entries()]
    .sort(([a], [b]) => orderOf(a) - orderOf(b) || a.localeCompare(b, 'es'))
    .map(([name, articles]) => {
      const looseArticles = articles
        .filter((a) => !subtopicKeyOf(a))
        .sort(byOrder)
        .map(toNavArticle);
      const overview = extractOverview(looseArticles, name);

      const subtopics: GuideNavSubtopic[] = [
        ...groupBy(
          articles.filter((a) => subtopicKeyOf(a)),
          (a) => subtopicKeyOf(a) as string,
        ).entries(),
      ]
        .map(([subName, subArticles]) => {
          const subArts = subArticles.sort(byOrder).map(toNavArticle);
          const subOverview = extractOverview(subArts, subName);
          return {
            name: subName,
            slug: slugify(subName),
            overviewId: subOverview?.id,
            overviewAudience: subOverview?.audience,
            articles: subArts,
          };
        })
        .sort(
          (x, y) =>
            (x.articles[0]?.order ?? 0) - (y.articles[0]?.order ?? 0) ||
            x.name.localeCompare(y.name, 'es'),
        );

      return {
        name,
        slug: slugify(name),
        overviewId: overview?.id,
        overviewAudience: overview?.audience,
        looseArticles,
        subtopics,
      };
    });

  const firstGroup = groups[0];
  const fallbackArticle = inModule.slice().sort(byOrder)[0];
  const firstArticleId =
    firstGroup?.overviewId ??
    firstGroup?.looseArticles[0]?.id ??
    firstGroup?.subtopics[0]?.overviewId ??
    firstGroup?.subtopics[0]?.articles[0]?.id ??
    (fallbackArticle && routeIdOf(fallbackArticle.id)) ??
    moduleSlug;

  // Aplana los submódulos marcados: cada tema pasa a ser un submódulo de primer
  // nivel; el envoltorio (y su artículo de portada) desaparecen del índice.
  const flatten = new Set(config?.flattenSubmodules ?? []);
  const displayGroups: GuideNavGroup[] = groups.flatMap((group) => {
    if (!flatten.has(group.name) || group.subtopics.length === 0) return [group];
    return group.subtopics.map((sub) => ({
      name: sub.name,
      slug: sub.slug,
      overviewId: sub.overviewId,
      looseArticles: sub.articles,
      subtopics: [],
    }));
  });

  return { moduleName, moduleSlug, groups: displayGroups, firstArticleId };
}

/** ¿El artículo `currentId` está en algún punto del árbol de este módulo? Sirve
 *  para decidir si el módulo debe aparecer abierto en un directorio (p. ej. el
 *  panel "Documentación" del menú persistente, que agrupa varios módulos). */
export function guideNavContains(nav: GuideNav, currentId: string | undefined): boolean {
  if (!currentId) return false;
  const subHasCurrent = (sub: GuideNavSubtopic) =>
    sub.overviewId === currentId || sub.articles.some((a) => a.id === currentId);
  return (
    nav.firstArticleId === currentId ||
    nav.groups.some(
      (group) =>
        group.overviewId === currentId ||
        group.looseArticles.some((a) => a.id === currentId) ||
        group.subtopics.some(subHasCurrent),
    )
  );
}
