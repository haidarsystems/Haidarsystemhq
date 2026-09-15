import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectStatuses = [
  'Idea',
  'Research',
  'Experiment',
  'Prototype',
  'MVP',
  'Validated',
  'Active',
  'Delivered',
  'Paused',
  'Archived',
] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    status: z.enum(projectStatuses),
    summary: z.string(),
    problem: z.string(),
    reason: z.string(),
    system: z.string(),
    implementation: z.string(),
    technology: z.array(z.string()),
    result: z.string(),
    lesson: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    featured: z.boolean().default(false),
    updated_at: z.coerce.date(),
  }),
});

const thinking = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/thinking' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['draft', 'published']),
    updated_at: z.coerce.date(),
  }),
});

export const collections = { projects, thinking };
