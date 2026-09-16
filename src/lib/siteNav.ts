import type { CollectionEntry } from 'astro:content';
import { buildGuideNav, type GuideNav } from './guideNav';

type Article = CollectionEntry<'manual'>;

/**
 * Menú persistente de todo el sitio (lateral izquierdo, visible en cualquier
 * página vía BaseLayout): arriba las "categorías" — los mismos accesos de la
 * home — y debajo, el árbol de la categoría seleccionada.
 *
 * No hace falta tocar nada para que un módulo nuevo aparezca en "Documentación":
 * basta con añadirlo a `DOCUMENTATION_MODULE_NAMES`.
 */

export type SiteNavSectionId =
  | 'empezar-en-aturnos'
  | 'modulos'
  | 'app-movil'
  | 'proyectos'
  | 'biostar'
  | 'glosario'
  | 'apirest';

interface SiteNavBase {
  id: SiteNavSectionId;
  label: string;
  icon: string;
}

export interface SiteNavGuideSection extends SiteNavBase {
  kind: 'guide';
  href: string;
  nav: GuideNav;
}

export interface SiteNavDirectorySection extends SiteNavBase {
  kind: 'directory';
  href: string;
  modules: GuideNav[];
}

export interface SiteNavGlossarySection extends SiteNavBase {
  kind: 'glossary';
  href: string;
  terms: { id: string; title: string; href: string }[];
  /** El botón extra junto al pill: lleva a la página completa del glosario
   *  (buscador + filtro por categoría + cards), no al árbol A-Z de aquí. */
  extraAction: { label: string; href: string };
}

export interface SiteNavPlainSection extends SiteNavBase {
  kind: 'disabled' | 'external';
  href?: string;
}

export type SiteNavSection =
  | SiteNavGuideSection
  | SiteNavDirectorySection
  | SiteNavGlossarySection
  | SiteNavPlainSection;

// Módulos del directorio "Documentación", en el mismo orden que
// src/pages/manual/index.astro. No incluye Empezar en aTurnos / App móvil /
// Glosario porque esos ya tienen su propia categoría arriba.
const DOCUMENTATION_MODULE_NAMES = [
  'Planificación',
  'Control horario',
  'Configuración y cuenta',
  'Costes y nóminas',
  'Documentos',
  'General',
  'Gestión de personal',
  'Integraciones y API',
  'Peticiones y cambios',
  'Recursos y partes',
  'Tareas',
  'Pruebas',
];

const moduleSlugOf = (entry: Article) => entry.id.split('/').slice(0, -1).join('/');

export function buildSiteNav(entries: Article[]): SiteNavSection[] {
  const slugByModuleName = new Map<string, string>();
  for (const entry of entries) {
    if (!slugByModuleName.has(entry.data.module)) {
      slugByModuleName.set(entry.data.module, moduleSlugOf(entry));
    }
  }

  const documentationModules = DOCUMENTATION_MODULE_NAMES.map((name) => slugByModuleName.get(name))
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => buildGuideNav(entries, slug));

  const glossaryTerms = entries
    .filter((e) => e.data.module === 'Glosario')
    .map((e) => ({ id: e.id, title: e.data.title, href: `/manual/${e.id}/` }))
    .sort((a, b) => a.title.localeCompare(b.title, 'es'));

  const empezarNav = buildGuideNav(entries, 'empezar-en-aturnos');
  const appMovilNav = buildGuideNav(entries, 'app-movil');
  const proyectosNav = buildGuideNav(entries, 'gestion-de-proyectos');
  const biostarNav = buildGuideNav(entries, 'integracion-biostar');

  return [
    {
      id: 'empezar-en-aturnos',
      label: 'Cómo empezar en aTurnos',
      icon: '◉',
      kind: 'guide',
      href: `/manual/${empezarNav.firstArticleId}/`,
      nav: empezarNav,
    },
    {
      id: 'modulos',
      label: 'Documentación',
      icon: '▤',
      kind: 'directory',
      href: '/manual/',
      modules: documentationModules,
    },
    {
      id: 'app-movil',
      label: 'App móvil',
      icon: '▣',
      kind: 'guide',
      href: `/manual/${appMovilNav.firstArticleId}/`,
      nav: appMovilNav,
    },
    {
      id: 'proyectos',
      label: 'Gestión de proyectos',
      icon: '▦',
      kind: 'guide',
      href: `/manual/${proyectosNav.firstArticleId}/`,
      nav: proyectosNav,
    },
    {
      id: 'biostar',
      label: 'Integración con Biostar',
      icon: '⇄',
      kind: 'guide',
      href: `/manual/${biostarNav.firstArticleId}/`,
      nav: biostarNav,
    },
    {
      id: 'glosario',
      label: 'Glosario',
      icon: '◇',
      kind: 'glossary',
      href: '/manual/glosario/',
      terms: glossaryTerms,
      extraAction: { label: 'Ver todo el glosario', href: '/manual/glosario/' },
    },
    { id: 'apirest', label: 'ApiRest', icon: '⌘', kind: 'external', href: 'https://api.aturnos.com/' },
  ];
}

/** A qué categoría pertenece la página actual, a partir de su ruta. */
export function activeSiteNavSectionFor(pathname: string): SiteNavSectionId | null {
  if (pathname.startsWith('/manual/empezar-en-aturnos/')) return 'empezar-en-aturnos';
  if (pathname.startsWith('/manual/app-movil/')) return 'app-movil';
  if (pathname.startsWith('/manual/gestion-de-proyectos/')) return 'proyectos';
  if (pathname.startsWith('/manual/integracion-biostar/')) return 'biostar';
  if (pathname.startsWith('/manual/glosario/')) return 'glosario';
  if (pathname.startsWith('/manual/')) return 'modulos';
  return null;
}
