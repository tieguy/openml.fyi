import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkSmartypants from 'remark-smartypants';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  // Apex, not www. Every Ghost-era link points at www.openml.fyi and takes one
  // 301 hop here; see the design plan for why the redirect runs this direction.
  site: 'https://openml.fyi',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkSmartypants],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'prepend',
        properties: { className: ['anchor-link'], ariaHidden: true, tabIndex: -1 },
        content: { type: 'text', value: '#' },
      }],
    ],
  },
});
