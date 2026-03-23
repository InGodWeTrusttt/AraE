# AraE Product Site Pack

This package extends the original landing page into a small product site with:

- a hash-based router that works reliably on GitHub Pages;
- detailed pages for the four core modules;
- footer links wired to real internal pages;
- support, resources, updates, and legal starter pages;
- the existing dark visual direction preserved and generalized.

## Included pages

- Home
- Features
- Modules index
- Sessions
- World
- Rules
- GM Toolbox
- Pricing
- Windows App
- Updates
- Documentation
- Community
- Video Tutorials
- Dev Blog
- API Access
- Help Center
- Contact Us
- Report a Bug
- Privacy Policy
- Terms of Service
- Not Found

## Routing strategy

The project uses hash routes (`#/pricing`, `#/modules/world`) to avoid GitHub Pages refresh and deep-link issues.

## Deploy notes

- `vite.config.ts` is set to `base: '/AraE/'` for the repository name `AraE`.
- `.github/workflows/deploy.yml` is included and builds `dist` on GitHub Actions.

## Operational follow-up required

Some pages are intentionally delivered as production-ready layouts with placeholder operational content that you should replace before launch:

- Contact Us
- Report a Bug
- Community
- API Access
- Privacy Policy
- Terms of Service

The structure is complete, but those pages still need your real addresses, channels, policy text, and support workflow.
