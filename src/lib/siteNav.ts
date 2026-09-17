import type { CollectionEntry } from 'astro:content';
import { buildGuideNav, routeIdOf, type GuideNav } from './guideNav';

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
  | 'integracion-hardware'
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
  /** El pill entero navega aquí (página completa: buscador + filtro por
   *  categoría + cards) — no solo cambia de panel como los demás pills. */
  href: string;
  terms: { id: string; title: string; href: string }[];
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
  'Cita previa',
];

// Módulos del directorio "Integración y Hardware" (carpeta física
// integraciones-y-hardware/). Cada uno es un módulo independiente, con su
// propio `module` de frontmatter — para añadir uno nuevo (p. ej. "SPEC"),
// crea su carpeta ahí dentro y agrega aquí el nombre exacto de su `module`.
const INTEGRATIONS_MODULE_NAMES = ['Integración con Biostar', 'SPEC', 'Wall App'];

const moduleSlugOf = (entry: Article) => routeIdOf(entry.id).split('/').slice(0, -1).join('/');

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

  const integrationModules = INTEGRATIONS_MODULE_NAMES.map((name) => slugByModuleName.get(name))
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => buildGuideNav(entries, slug));

  const glossaryTerms = entries
    .filter((e) => e.data.module === 'Glosario')
    .map((e) => ({ id: routeIdOf(e.id), title: e.data.title, href: `/manual/${routeIdOf(e.id)}/` }))
    .sort((a, b) => a.title.localeCompare(b.title, 'es'));

  const empezarNav = buildGuideNav(entries, 'empezar-en-aturnos');
  const appMovilNav = buildGuideNav(entries, 'app-movil');
  const proyectosNav = buildGuideNav(entries, 'gestion-de-proyectos');

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
      id: 'integracion-hardware',
      label: 'Integración y Hardware',
      icon: '⇄',
      kind: 'directory',
      href: `/manual/${integrationModules[0]?.firstArticleId ?? 'integracion-biostar'}/`,
      modules: integrationModules,
    },
    {
      id: 'glosario',
      label: 'Glosario',
      icon: '◇',
      kind: 'glossary',
      href: '/manual/glosario/',
      terms: glossaryTerms,
    },
    { id: 'apirest', label: 'ApiRest', icon: '⌘', kind: 'external', href: 'https://api.aturnos.com/' },
  ];
}

/**
 * A qué categoría pertenece la página actual, a partir de su ruta. Se deriva
 * de los módulos ya construidos (no de rutas escritas a mano) para que un
 * cambio de slug o un módulo nuevo no requiera venir a actualizar esto
 * también — es justo lo que se desincronizó la última vez que se renombró
 * una sección.
 */
export function activeSiteNavSectionFor(
  pathname: string,
  sections: SiteNavSection[],
): SiteNavSectionId | null {
  for (const section of sections) {
    if (section.kind === 'guide' && pathname.startsWith(`/manual/${section.nav.moduleSlug}/`)) {
      return section.id;
    }
    if (
      section.kind === 'directory' &&
      section.id !== 'modulos' &&
      section.modules.some((m) => pathname.startsWith(`/manual/${m.moduleSlug}/`))
    ) {
      return section.id;
    }
    if (section.kind === 'glossary' && pathname.startsWith('/manual/glosario/')) {
      return section.id;
    }
  }
  // "Documentación" ('modulos') es el directorio general: cualquier ruta de
  // /manual/ que no haya matcheado una categoría más específica cae aquí.
  return pathname.startsWith('/manual/') ? 'modulos' : null;
}
