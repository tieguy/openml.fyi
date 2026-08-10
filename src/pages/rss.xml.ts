import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, urlFor } from '../lib/entries';

// Served at /rss/ via a Netlify rewrite, which is the path Ghost used and what
// existing subscribers' readers still poll. The feed will never gain new items;
// it exists so those clients get a valid document and the final issue rather
// than a 404.
export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: 'Open+ML: Updates from the field',
    description: '(ir)regular updates from the jagged frontier of ML and open',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: urlFor(post),
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
