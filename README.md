# openml.fyi

Static archive of **Open+ML: Updates from the field**, a newsletter about the
collision of open and machine learning that ran from September 2022 to April
2026 and has concluded.

The content is frozen. Nothing new will be published here, which is why there is
no CMS, no syndication, and no draft workflow.

## Contents

35 issues and 4 pages, 2022-09-23 to 2026-04-24, with 94 images.

## Development

```bash
npm install
npm run dev      # local preview
npm run build    # static build to dist/
npm run check    # astro check
```

## How the content got here

The archive was migrated off Ghost(Pro). Two tools in the
[content-archive](https://github.com/tieguy/content-archive) repo produced it:

- `scripts/backup_ghost.py` pulls every post, page, and image out of Ghost's
  public Content API into a raw JSON backup.
- `import-ghost` (`src/ghost_importer/`) converts that backup into the markdown
  under `src/content/`, rewriting image paths, stripping Ghost's `?ref=`
  tracking parameters, and localizing self-links.

To regenerate the content, re-run the importer against the backup rather than
editing `src/content/` by hand.

## Notes for future maintenance

- **URLs are load-bearing.** Posts and pages share one flat `/{slug}/`
  namespace, matching Ghost exactly so no inbound link breaks. Don't restructure
  routes.
- **`/rss/` is a Netlify rewrite** to `/rss.xml`, because that's the path Ghost
  used and what subscribers' readers still poll. It won't resolve under
  `npm run preview`, which doesn't read `netlify.toml`.
- **Ghost card markup is preserved as inline HTML** inside the markdown.
  `kg-bookmark-card` blocks are frozen link previews whose text was baked in
  when the link was pasted, so they still read correctly even where the target
  has since died. Converting them to plain markdown would lose that.
- **Fonts are self-hosted** (Cardo and Lora, both OFL-1.1), matching the Ghost
  theme's brand settings. No third-party CDN.

## Design

Full migration plan, including the phases and the decisions behind them:
`docs/design-plans/2026-08-09-openml-fyi-ghost-to-static.md` in the
content-archive repo.
