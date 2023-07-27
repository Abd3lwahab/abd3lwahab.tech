import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({})

const projectsCollection = defineCollection({
  // type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    image: z.string(),
    puplishedAt: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
})

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
}
