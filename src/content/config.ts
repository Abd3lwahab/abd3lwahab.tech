import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({})

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    image: z.string(),
    puplishedAt: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    featured: z.boolean(),
  }),
})

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
}
