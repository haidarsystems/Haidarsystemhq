# Haidar System

A content-driven public interface for the Haidar System operating brand.

> Building practical digital systems for real-world problems.

## Project goal

Haidar System turns the brand foundation in `docs/` into a maintainable public Brand OS: positioning, capability territories, project proof, working notes, and a clear conversation path.

The site is intentionally static and simple. It does not include authentication, accounts, payment, a private dashboard, a database, a CRM, or an AI chatbot.

## Completed features

- Responsive, keyboard-accessible global navigation
- Home page with positioning, current focus, capability map, selected proof, recent thinking, and contact CTA
- Build page organized by problem-solving territory
- Structured project collection with honest maturity labels
- Project index and evidence-first detail routes
- Structured thinking collection with index and detail routes
- About and contact pages
- Per-route title, description, canonical, Open Graph, and Twitter metadata
- Visible focus states, semantic headings, skip link, responsive layouts, and reduced-motion support
- Static Astro build compatible with Cloudflare Pages

## Routes

| Route | Purpose | Parameters |
| --- | --- | --- |
| `/` | Brand positioning and current system overview | None |
| `/build/` | Capability territories | None |
| `/projects/` | Project proof index | None |
| `/projects/[slug]/` | Evidence-first project detail | `slug` from project content frontmatter |
| `/thinking/` | Published notes index | None |
| `/thinking/[slug]/` | Published note detail | `slug` from thinking content frontmatter |
| `/about/` | Operating philosophy and current learning | None |
| `/contact/` | Conversation prompts and verified contact availability | None |

Current project slugs: `haidar-system`, `runner-os`, `qima-rqbl`.

Current thinking slugs: `demand-before-building`, `evidence-over-claims`, `from-tools-to-systems`.

## Content and data architecture

- **Brand source of truth:** `docs/00_BRAND_FOUNDATION.md` through `docs/10_PUBLIC_WEB_SYSTEM_BLUEPRINT.md`
- **Published projects:** `src/content/projects/*.md`
- **Published notes:** `src/content/thinking/*.md`
- **Schemas:** `src/content.config.ts`
- **Presentation:** Astro pages, components, layout, and global CSS under `src/`
- **Storage services:** None. V1 uses static Markdown content and requires no database.

To publish a project or note, add a Markdown file matching the relevant schema. Route generation is automatic during build.

## User guide

1. Open the home page to understand the current focus.
2. Browse `/projects/` to inspect maturity and evidence for each project.
3. Browse `/thinking/` for public reasoning and working principles.
4. Use `/build/` to understand capability territories.
5. Use `/contact/` for guidance on starting a useful conversation. No unverified email or social address is published.

## Local development

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

The build output is written to `dist/`.

## Deployment

- **Target:** Cloudflare Pages (BYOK)
- **Production:** https://webapp-2-49t.pages.dev
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Production branch:** `main`
- **Status:** Active and verified on 2026-09-15.

## Not yet implemented

- A verified direct contact address or social profile link
- Real audience-response or opportunity metrics
- RSS, search, tags pages, `/now`, and `/lab` (optional future scope)
- Private opportunity/operator system (explicitly outside V1)

## Recommended next steps

1. Add a verified contact method through repository configuration.
2. Publish project updates only when evidence changes.
3. Add new thinking notes from real work and observed demand.
4. Observe relevant conversations before expanding the system.

## Technology

Astro 5, TypeScript, Markdown content collections, and static CSS. The project remains database-free and can be maintained by a solo operator.

Last updated: 2026-09-15
