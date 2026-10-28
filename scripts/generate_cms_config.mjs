// Genera public/admin/config.yml (panel de contenido Sveltia CMS en /admin) a
// partir del contenido real y de la configuración de navegación, para que el
// panel ofrezca exactamente las mismas opciones que entiende el menú.
//
//   npm run generate:cms
//
// Cada sección/módulo del menú es una colección del panel con su propio
// formulario: al pulsar "Nuevo" dentro de una, el módulo, la carpeta y la
// plataforma ya vienen fijados y los desplegables de submódulo y tema solo
// muestran los de ese módulo. Vuelve a ejecutarlo cuando cambie la
// estructura (submódulos nuevos en GUIDE_MODULES, módulos nuevos, etc.).
//
// Requiere Node 22.18+ (importa src/lib/guideNav.ts con type stripping).

import fs from 'node:fs';
import path from 'node:path';
import { register } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import YAML from 'yaml';

// guideNav.ts importa './slug' sin extensión (estilo bundler); este hook le
// añade `.ts` para poder importarlo directamente desde Node.
register(
  'data:text/javascript,' +
    encodeURIComponent(`export async function resolve(spec, ctx, next) {
      try { return await next(spec, ctx); }
      catch (error) {
        if (spec.startsWith('.') && !/\\.[a-z]+$/.test(spec)) return next(spec + '.ts', ctx);
        throw error;
      }
    }`),
);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'src/content/manual');
const OUTPUT = path.join(ROOT, 'public/admin/config.yml');
// Un .yml por tema (módulo › submódulo › tema): es la fuente del desplegable
// "Tema", que se filtra por el submódulo elegido. Fuera de src/ y public/:
// solo lo lee el panel, no forma parte del sitio.
const STRUCTURE_DIR = 'cms/estructura';
const STRUCTURE_COLLECTION = 'estructura';
// Los artículos nuevos se añaden al final de su submódulo/tema.
const NEW_ARTICLE_ORDER = 99;

const { GUIDE_MODULES, routeIdOf } = await import(
  pathToFileURL(path.join(ROOT, 'src/lib/guideNav.ts')).href
);
const { slugify } = await import(pathToFileURL(path.join(ROOT, 'src/lib/slug.ts')).href);

// Valores de prueba que existen en el contenido pero no deben ofrecerse.
const IGNORED_OPTIONS = new Set(['Pruebas', 'Pruebas2']);

// Temas que define la estructura del manual (hoja "Estructura objetivo" de
// reclasificacion/reclasificacion-manual.xlsx) pero que aún no tienen ningún
// artículo, así que el contenido no dice de qué submódulo cuelgan.
// Clave: carpeta del módulo → { submódulo: [temas] }.
const SUBTOPICS_WITHOUT_ARTICLES = {
  'control-horario': { 'Petición de fichajes': ['Peticiones de fichajes históricas'] },
};

// Orden y agrupación de las colecciones = orden del menú del sitio
// (src/lib/siteNav.ts). El menú lateral del panel no admite títulos de grupo:
// cada grupo se distingue por su icono (Material Symbols) y por los
// separadores, y sus secciones llevan solo el nombre del módulo, sin repetir
// el del grupo. Documentación solo incluye los módulos de la
// estructura nueva (con entrada en GUIDE_MODULES): en los módulos antiguos
// pendientes de reclasificar, un artículo nuevo no aparecería en el menú.
const SECTIONS = [
  { label: 'Cómo empezar', folder: 'empezar-en-aturnos', platform: 'web', icon: 'rocket_launch' },
  { divider: true },
  ...[
    'planificacion',
    'trabajadores',
    'configuracion-de-equipos',
    'reportes-estadisticos',
    'registros',
    'gestion-de-rrhh',
    'planificacion-avanzada',
    'control-horario',
    'documentos',
    'tareas',
    'nominas',
  ].map((slug) => ({ group: 'Documentación', folder: `manual/${slug}`, platform: 'web', icon: 'description' })),
  { divider: true },
  // Solo los artículos sueltos de app-movil/ ("El caso de App", caso A en
  // templateManual.md); las subcarpetas por módulo web (caso B) no se usan hoy.
  { label: 'App móvil', folder: 'app-movil', platform: 'app', icon: 'smartphone' },
  { divider: true },
  { label: 'Proyectos', folder: 'gestion-de-proyectos', platform: 'web', icon: 'assignment' },
  { divider: true },
  ...['integracion-biostar', 'integracion-spec', 'wall-app'].map((slug) => ({
    group: 'Integración y Hardware',
    folder: `integraciones-y-hardware/${slug}`,
    platform: 'web',
    icon: 'router',
  })),
  { divider: true },
  { label: 'Glosario', folder: 'glosario', platform: 'web', glossary: true, icon: 'sort_by_alpha' },
];

const readArticles = (folder) =>
  fs
    .readdirSync(path.join(CONTENT, folder), { withFileTypes: true })
    // También .mdx (con componentes): el panel solo edita .md, pero sus
    // submódulos/temas forman parte igualmente de la estructura.
    .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
    .map((entry) => {
      const raw = fs.readFileSync(path.join(CONTENT, folder, entry.name), 'utf8');
      return YAML.parse(raw.split(/^---$/m)[1]);
    });

const unique = (values) => [...new Set(values.filter((v) => v && !IGNORED_OPTIONS.has(v)))];
const byName = (a, b) => a.localeCompare(b, 'es');

// --- Campos -----------------------------------------------------------------
// El orden de la lista es el orden en que el CMS escribe el frontmatter: es el
// mismo que el de los artículos existentes, para que editar uno no reordene
// sus campos.

const hidden = (name, value) => (value === undefined ? { name, widget: 'hidden' } : { name, widget: 'hidden', default: value });

const ROLE_OPTIONS = ['Trabajador', 'Administrador', 'RRHH', 'Nóminas', 'Desarrollador API'];

function buildFields(section, info) {
  const { glossary } = section;
  const fields = [
    hidden('schemaVersion', '1.0'),
    hidden('contentId', `${info.slug}-{{uuid_short}}`),
    {
      name: 'title',
      label: glossary ? 'Término' : 'Título',
      widget: 'string',
      minlength: 5,
      hint: glossary
        ? 'El nombre del término, tal como aparecerá en el índice A-Z.'
        : 'Lo que verá el usuario en el menú y en la cabecera del artículo.',
    },
    // El orden solo tiene sentido respecto a los hermanos del mismo
    // submódulo/tema: los artículos nuevos van al final y los existentes
    // conservan el suyo.
    hidden('order', glossary ? 1 : NEW_ARTICLE_ORDER),
    {
      name: 'description',
      label: glossary ? 'Definición corta' : 'Descripción',
      widget: 'text',
      minlength: 30,
      hint: glossary
        ? 'La definición en una frase (mínimo 30 caracteres).'
        : 'Resumen de una frase (mínimo 30 caracteres). Aparece en buscadores y listados.',
    },
    // Sin uso real en el sitio hoy: oculto, con el valor de la plantilla en
    // los nuevos; los existentes conservan el suyo.
    hidden('contentType', glossary ? 'concept' : 'procedure'),
    hidden('module', info.module),
    {
      name: 'submodule',
      label: glossary ? 'Categoría' : `Pertenece a: submódulo de ${info.module}`,
      widget: 'select',
      options: info.submodules,
      hint: glossary
        ? 'Categoría del filtro del glosario.'
        : `Dónde aparece en el menú: ${info.module} › este submódulo. Si falta uno, hay que añadirlo a la estructura del manual (no se crea desde aquí).`,
    },
  ];

  // El tema depende del submódulo: el desplegable solo ofrece los temas del
  // submódulo elegido arriba (filtro sobre la colección "estructura").
  if (info.hasSubtopics) {
    fields.push({
      name: 'subtopic',
      label: 'Pertenece a: tema dentro del submódulo',
      widget: 'relation',
      required: false,
      collection: STRUCTURE_COLLECTION,
      value_field: 'subtopic',
      display_fields: ['subtopic'],
      search_fields: ['subtopic'],
      filters: [
        { field: 'module', values: [info.module] },
        { field: 'submodule', values: ['{{fields.submodule}}'] },
      ],
      hint: 'Opcional: solo si el submódulo agrupa sus artículos por temas. Elige primero el submódulo.',
    });
  }

  // En casi todos los módulos `intent` es siempre igual al título: se calcula
  // solo. Donde hay excepciones se deja editable para no pisarlas al editar.
  fields.push(
    info.intentIsTitle
      ? { name: 'intent', widget: 'compute', value: '{{fields.title}}' }
      : {
          name: 'intent',
          label: 'Intención',
          widget: 'string',
          hint: 'Qué quiere conseguir el usuario con este artículo. Normalmente igual que el título.',
        },
  );

  fields.push(
    glossary
      ? hidden('audience', ['Trabajador', 'Administrador', 'RRHH'].map((role) => ({ role, access: 'applicable' })))
      : {
          name: 'audience',
          label: 'Roles',
          label_singular: 'rol',
          widget: 'list',
          min: 1,
          summary: '{{fields.role}}',
          hint: 'Quién necesita este artículo. Cada rol ve lo suyo y lo de los roles inferiores (Trabajador < Administrador < RRHH).',
          fields: [
            { name: 'role', label: 'Rol', widget: 'select', options: ROLE_OPTIONS },
            // Sin uso en el sitio: oculto con el valor de la plantilla.
            hidden('access', 'applicable'),
          ],
        },
    hidden('entities', []),
    // Sinónimos y términos relacionados solo se editan en el glosario; en
    // los artículos se conservan ocultos los que ya tengan.
    glossary
      ? {
          name: 'synonyms',
          label: 'Sinónimos',
          widget: 'list',
          required: false,
          hint: 'Otros nombres del término. Cada uno aparece en el índice A-Z llevando a este mismo término.',
        }
      : hidden('synonyms', []),
    glossary
      ? { name: 'relatedTerms', label: 'Términos relacionados', widget: 'list', required: false }
      : hidden('relatedTerms', []),
    glossary ? hidden('prerequisites', []) : { name: 'prerequisites', label: 'Requisitos previos', widget: 'list', required: false },
    // La plataforma la decide la sección ("nunca se mezclan" web y app).
    hidden('platforms', [section.platform]),
  );

  if (!glossary) {
    fields.push({
      name: 'video',
      label: 'Vídeo',
      widget: 'file',
      required: false,
      accept: 'video/*',
      choose_url: true,
      hint: 'Opcional: sube un vídeo o pega la URL de YouTube. Se muestra al inicio del artículo.',
    });
  }

  fields.push(
    {
      name: 'governance',
      label: 'Gestión editorial',
      widget: 'object',
      collapsed: true,
      fields: [
        {
          name: 'status',
          label: 'Estado',
          widget: 'select',
          default: 'draft',
          // Estados simplificados ("En revisión" = functional-review). Los
          // demás valores del esquema siguen siendo válidos en los archivos.
          options: [
            { label: 'Borrador', value: 'draft' },
            { label: 'En revisión', value: 'functional-review' },
            { label: 'Publicado', value: 'published' },
            { label: 'Obsoleto', value: 'deprecated' },
          ],
        },
        {
          name: 'owner',
          label: 'Autor',
          widget: 'string',
          default: 'Equipo de Producto de aTurnos',
          hint: 'Aparece en la tarjeta "Autor" del artículo.',
        },
        hidden('reviewer', null),
        hidden('reviewedAt', null),
        hidden('reviewDueAt', null),
        {
          name: 'sourceUrls',
          label: 'Fuentes',
          widget: 'list',
          required: false,
          hint: 'URLs completas (https://…) de donde sale la información.',
        },
        hidden('redirectsFrom', []),
      ],
    },
    {
      name: 'ai',
      label: 'Inteligencia artificial (opcional)',
      widget: 'object',
      collapsed: true,
      hint: 'Aún no se usa en el sitio: prepara el artículo para el futuro asistente con IA del manual.',
      fields: [
        {
          name: 'answerableQuestions',
          label: 'Preguntas que responde este artículo',
          widget: 'list',
          required: false,
          hint: glossary
            ? 'Opcional. Cómo preguntaría un usuario por este término, p. ej. "¿Qué es Turno?".'
            : 'Opcional. Escríbelas como las haría un usuario, p. ej. "¿Cómo creo un cuadrante borrador?". La IA las usará para saber cuándo recomendar este artículo.',
        },
        hidden('excludedQuestions', []),
        hidden('sensitivity', 'public'),
        hidden('chunking', 'by-section'),
      ],
    },
    glossary
      ? hidden('readingTime', 1)
      : { name: 'readingTime', label: 'Tiempo de lectura (min)', widget: 'number', value_type: 'int', min: 1, default: 2 },
    glossary
      ? hidden('featured', false)
      : {
          name: 'featured',
          label: 'Destacado',
          widget: 'boolean',
          default: false,
          hint: 'Aparece en "Contenido destacado" de la home.',
        },
    // Solo los artículos migrados del manual antiguo lo tienen: se conserva
    // tal cual al editarlos y no se pide en los nuevos.
    hidden('migration'),
    {
      name: 'labels',
      label: 'Etiquetas',
      widget: 'select',
      multiple: true,
      required: false,
      default: [],
      options: [{ label: 'Pendiente', value: 'PENDIENTE' }],
    },
    {
      name: 'body',
      label: glossary ? 'Definición completa' : 'Contenido',
      widget: 'markdown',
      hint: glossary
        ? 'Empieza con "## Resumen" y la definición completa del término.'
        : 'Usa encabezados "##" (Resumen, Procedimiento…). Para añadir capturas o archivos usa el botón de imagen/archivo de la barra: se suben a "Imágenes y archivos del manual".',
    },
  );
  return fields;
}

// --- Colecciones ------------------------------------------------------------

function buildCollection(section) {
  const articles = readArticles(section.folder);
  const modules = unique(articles.map((a) => a.module));
  if (modules.length !== 1) {
    throw new Error(`${section.folder}: se esperaba un único "module" y hay ${JSON.stringify(modules)}`);
  }
  const module = modules[0];
  const routeFolder = routeIdOf(section.folder);
  const config = GUIDE_MODULES[routeFolder];

  // Submódulos: en Documentación, exactamente los de la estructura nueva
  // (un artículo con otro submódulo quedaría oculto del menú). En el resto,
  // los configurados (si hay) más los que ya usa el contenido.
  const inDocs = section.folder.startsWith('manual/');
  const submodules = inDocs
    ? unique(config.submoduleOrder)
    : unique([...(config?.submoduleOrder ?? []), ...articles.map((a) => a.submodule).sort(byName)]);
  // Temas de cada submódulo, según dónde los usa el contenido real (la
  // configuración solo da el orden de los temas, no a qué submódulo cuelgan).
  const subtopicRank = (name) => {
    const index = (config?.subtopicOrder ?? []).indexOf(name);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  };
  for (const submodule of submodules) {
    const topics = unique([
      ...articles.filter((a) => a.submodule === submodule).map((a) => a.subtopic),
      ...(SUBTOPICS_WITHOUT_ARTICLES[routeFolder]?.[submodule] ?? []),
    ]).sort(
      (a, b) => subtopicRank(a) - subtopicRank(b) || byName(a, b),
    );
    for (const subtopic of topics) structureRows.push({ module, submodule, subtopic });
  }

  // Un tema de subtopicOrder sin submódulo padre no aparecería en el panel:
  // hay que añadirlo a SUBTOPICS_WITHOUT_ARTICLES.
  for (const subtopic of config?.subtopicOrder ?? []) {
    if (!structureRows.some((row) => row.module === module && row.subtopic === subtopic)) {
      console.warn(`⚠ ${module}: el tema "${subtopic}" no tiene submódulo conocido (añádelo a SUBTOPICS_WITHOUT_ARTICLES)`);
    }
  }

  const info = {
    slug: routeFolder.replaceAll('/', '-'),
    module,
    submodules,
    hasSubtopics: structureRows.some((row) => row.module === module),
    intentIsTitle: articles.every((a) => a.intent === a.title),
  };
  return {
    name: info.slug,
    label: section.group ? module : section.label,
    label_singular: section.glossary ? 'término' : 'artículo',
    icon: section.icon,
    description: section.glossary
      ? 'Términos del glosario (índice A-Z en /manual/glosario/).'
      : `${section.group ? `${section.group} › ` : ''}${module}. URL: /manual/${routeFolder}/<nombre-del-archivo>/`,
    folder: `src/content/manual/${section.folder}`,
    extension: 'md',
    format: 'frontmatter',
    create: true,
    slug: '{{title}}',
    identifier_field: 'title',
    summary: section.glossary
      ? '{{title}} · {{submodule}}'
      : info.hasSubtopics
        ? '{{submodule}} › {{subtopic}} › {{title}}'
        : '{{submodule}} › {{title}}',
    sortable_fields: ['title', 'submodule'],
    view_groups: [{ label: section.glossary ? 'Categoría' : 'Submódulo', field: 'submodule' }],
    preview_path: `manual/${routeFolder}/{{slug}}/`,
    fields: buildFields(section, info),
  };
}

const structureRows = [];
const contentCollections = SECTIONS.map((section) => (section.divider ? { divider: true } : buildCollection(section)));

// Árbol módulo › submódulo › tema, de solo lectura: alimenta el desplegable
// "Tema" y deja ver la estructura del manual desde el panel.
fs.rmSync(path.join(ROOT, STRUCTURE_DIR), { recursive: true, force: true });
fs.mkdirSync(path.join(ROOT, STRUCTURE_DIR), { recursive: true });
structureRows.forEach((row, index) => {
  const name = `${String(index + 1).padStart(3, '0')}-${slugify(`${row.module}-${row.submodule}-${row.subtopic}`)}.yml`;
  fs.writeFileSync(path.join(ROOT, STRUCTURE_DIR, name), YAML.stringify(row));
});
const structureCollection = {
  name: STRUCTURE_COLLECTION,
  label: 'Estructura del manual',
  icon: 'account_tree',
  description: 'Solo lectura: temas de cada submódulo. Se genera con "npm run generate:cms" a partir del contenido.',
  folder: STRUCTURE_DIR,
  extension: 'yml',
  format: 'yaml',
  create: false,
  delete: false,
  readonly: true,
  identifier_field: 'subtopic',
  summary: '{{module}} › {{submodule}} › {{subtopic}}',
  view_groups: [{ label: 'Módulo', field: 'module' }],
  fields: [
    { name: 'module', label: 'Módulo', widget: 'string' },
    { name: 'submodule', label: 'Submódulo', widget: 'string' },
    { name: 'subtopic', label: 'Tema', widget: 'string' },
  ],
};

const config = {
  backend: {
    name: 'github',
    repo: 'pgayos/ATURNOS-MANUAL',
    branch: 'main',
  },
  publish_mode: 'editorial_workflow',
  site_url: 'https://manual.aturnos.com',
  media_folder: 'public/media/manual',
  public_folder: '/media/manual',
  slug: { encoding: 'ascii', clean_accents: true },
  output: { yaml: { indent_sequences: true, quote: 'none' } },
  collections: [...contentCollections, { divider: true }, structureCollection],
  // Sección propia para subir, ver y reutilizar capturas, vídeos y archivos.
  asset_collections: [
    {
      name: 'medios',
      label: 'Imágenes y archivos del manual',
      icon: 'photo_library',
      media_folder: 'public/media/manual',
      public_folder: '/media/manual',
    },
  ],
};

const header = `# GENERADO por scripts/generate_cms_config.mjs — no editar a mano.
# Para cambiarlo: edita el script (o GUIDE_MODULES en src/lib/guideNav.ts) y
# ejecuta "npm run generate:cms".
#
# Panel de contenido (Sveltia CMS) servido en /admin. Una colección por
# sección/módulo del menú, cada una con su formulario.
# Pendiente (producción): backend.base_url del Sveltia CMS Authenticator para
# iniciar sesión con GitHub. Mientras tanto: "Trabajar con repositorio local"
# (Chrome/Edge) o un token personal de GitHub.
`;

fs.writeFileSync(OUTPUT, header + YAML.stringify(config, { lineWidth: 0, aliasDuplicateObjects: false }));
const collections = contentCollections.filter((c) => !c.divider);
console.log(`${path.relative(ROOT, OUTPUT)}: ${collections.length} secciones, ${structureRows.length} temas en ${STRUCTURE_DIR}/`);
for (const c of collections) {
  const module = c.fields.find((f) => f.name === 'module').default;
  const sub = c.fields.find((f) => f.name === 'submodule').options.length;
  const topics = structureRows.filter((row) => row.module === module).length;
  console.log(`  ${c.label}: ${sub} submódulos${topics ? `, ${topics} temas` : ''}`);
}
