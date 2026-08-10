import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The archive is frozen -- the newsletter concluded in April 2026 and nothing
// new will be published. Hence no `draft` field, no syndication, no CMS.

const shared = {
  title: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  description: z.string().optional(),
  // Authored during migration; Ghost held zero tags.
  tags: z.array(z.string()).default([]),
  feature_image: z.string().optional(),
  feature_image_alt: z.string().optional(),
  // HTML, and usually a CC attribution line -- a licensing obligation, not
  // decoration. Rendered under the feature image.
  feature_image_caption: z.string().optional(),
  // Ghost's own curation flag, kept as a record. Does not drive the front page.
  featured: z.boolean().default(false),
  // Ghost's internal object id, so a record here can be traced back to the
  // backup in archives/blogs/openml-fyi/.
  ghost_id: z.string().optional(),
};

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object(shared),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object(shared),
});

export const collections = { posts, pages };
