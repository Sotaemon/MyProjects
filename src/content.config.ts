import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    language: z.string(),
    date: z.string(),
    readTime: z.string(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { articles };