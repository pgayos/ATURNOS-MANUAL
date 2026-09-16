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

const moduleSlugOf = (entry: Article) => entry.id.split('/').slice(0, -1).join('/');

const byOrder = (a: Article, b: Article) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, 'es');

const toNavArticle = (a: Article): GuideNavArticle => ({
  id: a.id,
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

  const inModule = entries.filter((entry) => moduleSlugOf(entry) === moduleSlug);
  const moduleName = inModule[0]?.data.module ?? moduleSlug;

  const groups: GuideNavGroup[] = [...groupBy(inModule, (a) => a.data.submodule).entries()]
    .sort(([a], [b]) => orderOf(a) - orderOf(b) || a.localeCompare(b, 'es'))
    .map(([name, articles]) => {
      const looseArticles = articles
        .filter((a) => !a.data.subtopic)
        .sort(byOrder)
        .map(toNavArticle);
      const overview = extractOverview(looseArticles, name);

      const subtopics: GuideNavSubtopic[] = [
        ...groupBy(
          articles.filter((a) => a.data.subtopic),
          (a) => a.data.subtopic as string,
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
  const firstArticleId =
    firstGroup?.overviewId ??
    firstGroup?.looseArticles[0]?.id ??
    firstGroup?.subtopics[0]?.overviewId ??
    firstGroup?.subtopics[0]?.articles[0]?.id ??
    inModule.slice().sort(byOrder)[0]?.id ??
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
