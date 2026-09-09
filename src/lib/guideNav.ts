import type { CollectionEntry } from 'astro:content';
import { slugify } from './slug';

type Article = CollectionEntry<'manual'>;

/**
 * Módulos "guía": se leen de principio a fin como un manual único.
 * En lugar de la página de cards, al entrar se salta al primer artículo, y
 * cada artículo muestra a la izquierda el índice completo del módulo
 * (submódulos → temas → artículos) en su orden real de lectura.
 *
 * `submoduleOrder` fija el orden de los submódulos (no es alfabético).
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
};

export function isGuideModule(moduleSlug: string): boolean {
  return Object.prototype.hasOwnProperty.call(GUIDE_MODULES, moduleSlug);
}

export function isFlattenedSubmodule(moduleSlug: string, submodule: string): boolean {
  return (GUIDE_MODULES[moduleSlug]?.flattenSubmodules ?? []).includes(submodule);
}

export interface GuideNavArticle {
  id: string;
  title: string;
  order: number;
}

export interface GuideNavSubtopic {
  name: string;
  slug: string;
  /** artículo de portada del tema (su título coincide con el nombre del tema);
   *  se muestra como enlace en la cabecera, no como un ítem repetido. */
  overviewId?: string;
  articles: GuideNavArticle[];
}

export interface GuideNavGroup {
  name: string;
  slug: string;
  /** artículo de portada del submódulo (mismo criterio que en los temas). */
  overviewId?: string;
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
});

/** ¿El título del artículo es el de la sección (mismo texto o "<sección> …")? */
const isSectionOverview = (articleTitle: string, sectionName: string) => {
  const a = slugify(articleTitle);
  const s = slugify(sectionName);
  return a === s || a.startsWith(`${s}-`);
};

/** Si el primer artículo es la portada de la sección, lo saca de la lista y
 *  devuelve su id para usarlo como enlace de cabecera. */
const extractOverview = (
  articles: GuideNavArticle[],
  sectionName: string,
): string | undefined => {
  if (articles[0] && isSectionOverview(articles[0].title, sectionName)) {
    return articles.shift()!.id;
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
      const overviewId = extractOverview(looseArticles, name);

      const subtopics: GuideNavSubtopic[] = [
        ...groupBy(
          articles.filter((a) => a.data.subtopic),
          (a) => a.data.subtopic as string,
        ).entries(),
      ]
        .map(([subName, subArticles]) => {
          const subArts = subArticles.sort(byOrder).map(toNavArticle);
          const subOverviewId = extractOverview(subArts, subName);
          return {
            name: subName,
            slug: slugify(subName),
            overviewId: subOverviewId,
            articles: subArts,
          };
        })
        .sort(
          (x, y) =>
            (x.articles[0]?.order ?? 0) - (y.articles[0]?.order ?? 0) ||
            x.name.localeCompare(y.name, 'es'),
        );

      return { name, slug: slugify(name), overviewId, looseArticles, subtopics };
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
