import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const role = z.enum(['Trabajador', 'Planificador', 'Administrador', 'RRHH', 'Nóminas', 'Desarrollador API']);

const manual = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/manual' }),
  schema: z.object({
    schemaVersion: z.literal('1.0'),
    contentId: z.string().min(3),
    title: z.string().min(8),
    order: z.number().int().positive().default(1),
    description: z.string().min(30),
    contentType: z.enum(['procedure', 'concept', 'reference', 'faq', 'troubleshooting']),
    module: z.string(),
    submodule: z.string(),
    intent: z.string(),
    audience: z.array(z.object({ role, access: z.enum(['required', 'recommended', 'applicable']) })),
    entities: z.array(z.object({ id: z.string(), label: z.string() })),
    synonyms: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
    platforms: z.array(z.enum(['web', 'app'])),
    labels: z.array(z.enum(['PENDIENTE'])).default([]),
    governance: z.object({
      status: z.enum(['draft', 'functional-review', 'editorial-review', 'approved', 'published', 'deprecated']),
      owner: z.string(),
      reviewer: z.string().nullable(),
      reviewedAt: z.coerce.date().nullable(),
      reviewDueAt: z.coerce.date().nullable(),
      sourceUrls: z.array(z.url()),
      redirectsFrom: z.array(z.url()).default([])
    }),
    ai: z.object({
      answerableQuestions: z.array(z.string()),
      excludedQuestions: z.array(z.string()),
      sensitivity: z.enum(['public', 'authenticated', 'restricted']),
      chunking: z.literal('by-section')
    }),
    migration: z.object({
      sourceCount: z.number().int().positive(),
      originUrls: z.array(z.url()).min(1),
      redirectFrom: z.array(z.url()).min(1),
      contentHash: z.string().length(64),
      migratedAt: z.coerce.date()
    }),
    readingTime: z.number().positive(),
    featured: z.boolean().default(false)
  })
});

export const collections = { manual };
