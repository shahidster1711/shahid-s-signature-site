# SEO Checklist & Regeneration Steps

## Regenerate sitemap and robots
- Update `metadata.json` with the correct `siteUrl` and any additional pages.
- Run: `node generate-seo-files.mjs`

## Technical SEO checks
- Verify `sitemap.xml` and `robots.txt` are accessible at the live domain.
- Confirm canonical, Open Graph, and Twitter tags resolve to the live domain.
- Test core pages in Google Search Console and submit the sitemap.
- Run a Lighthouse audit (Performance, Accessibility, Best Practices, SEO).

## Content checks
- Ensure the primary keyword appears in the H1 and first paragraph.
- Add internal links between sections and any future blog posts.
- Expand thin sections with 150+ words where possible.
- Add a social share image and update `og:image` / `twitter:image`.
