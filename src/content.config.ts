import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
