import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { fileExists } from './utils';

const comics = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/comic" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    imageFile: z.string(),
    tags: z.array(z.string()),
    characters: z.array(z.string()),
    post: z.string(),
    slug: z.string(),
  })
});

const characterFile = fileExists("./src/data/characters.json") ? "src/data/characters.json" : "src/data/characters-example.json";

const characters = defineCollection({
  loader: file(characterFile, { parser: (text) => JSON.parse(text)}),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    imageFile: z.string(),
    id: z.string()
  })
});

const tagFile = fileExists("./src/data/tags.json") ? "src/data/tags.json" : "src/data/tags-example.json";

const tags = defineCollection({
  loader: file(tagFile, { parser: (text) => JSON.parse(text)}),
  schema: z.object({
    description: z.string(),
    id: z.string()
  })
});

export const collections = { comics, characters, tags };