import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/proyectos', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ }) =>
		z.object({
			title: z.string(),
			// Transform string to Date object
			thumbnail: z.string(),
			type: z.string(),
			url: z.string()
		}),
});

const musica = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/musica', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ }) =>
		z.object({
			title: z.string(),
			// Transform string to Date object
			thumbnail: z.string(),
			type: z.string(),
			url: z.string(),
			channel_name: z.string(),
			channel_avatar: z.string()
		}),
});
export const collections = { proyectos, musica };
