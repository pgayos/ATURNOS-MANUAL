import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { routeIdOf, topLevelModuleSlugOf } from '../lib/guideNav';

// Etiqueta de categoría que se muestra en el dropdown de sugerencias del
// buscador de la home, a partir del módulo "contenedor" del artículo.
const CATEGORY_LABELS: Record<string, string> = {
  'empezar-en-aturnos': 'Cómo empezar',
  'app-movil': 'App móvil',
  'integracion-biostar': 'Hardware',
  'integraciones-y-hardware': 'Hardware',
  'gestion-de-proyectos': 'Implantación',
  glosario: 'Glosario',
};

export const GET: APIRoute = async () => {
  const entries = await getCollection('manual');
  const items = entries.map((entry) => {
    const moduleSlug = topLevelModuleSlugOf(entry.id);
    return {
      title: entry.data.title,
      description: entry.data.description,
      url: `/manual/${routeIdOf(entry.id)}/`,
      category: CATEGORY_LABELS[moduleSlug] ?? 'Documentación',
      synonyms: entry.data.synonyms,
      roles: entry.data.audience.map((a) => a.role),
    };
  });

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
};
