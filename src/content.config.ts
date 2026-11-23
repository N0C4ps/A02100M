import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resourceSet = z.object({
  audio: z.string().optional(),
  notas: z.string().optional(),
  slides: z.string().optional(),
  pdf: z.string().optional(),
  googleSlides: z.string().optional(),
  legendas: z.string().optional(),
  transcricao: z.string().optional(),
  video: z.string().optional(),
  shorts: z.string().optional(),
});

const lessonSchema = z.object({
  title: z.string(),
  resources: resourceSet.optional(),
});

const weeks = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/weeks' }),
  schema: z.object({
    week: z.number(),
    title: z.string(),
    lessons: z.array(lessonSchema).default([]),
    reforco: z
      .object({
        title: z.string().default('Aula de reforço'),
        resources: resourceSet.optional(),
      })
      .optional(),
    exercicios: z.string().optional(),
    questionario: z.string().optional(),
  }),
});

export const collections = { weeks };
