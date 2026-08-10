import { getCollection, type CollectionEntry } from 'astro:content';

export type ArchiveEntry = CollectionEntry<'posts'> | CollectionEntry<'pages'>;

/**
 * Ghost served posts and pages from one flat root namespace, and the migration
 * reproduces that exactly so no inbound link breaks. Slugs are verified
 * collision-free across both collections.
 */
export const urlFor = (entry: ArchiveEntry) => `/${entry.id}/`;

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

/** All posts, newest first. */
export async function getPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPages() {
  return getCollection('pages');
}

/** Every tag with its entry count, most-used first. */
export async function getTagCounts() {
  const entries = [...(await getPosts()), ...(await getPages())];
  const counts = new Map<string, number>();
  for (const entry of entries) {
    for (const tag of entry.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
