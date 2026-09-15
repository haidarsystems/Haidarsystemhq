# Haidar System

**Personal operating brand for building practical digital systems.**

Haidar System is the public home for Haidar's thinking, experiments, capabilities, and project proof across software, AI, automation, business systems, integrations, and emerging technology.

## Web V1

The repository now contains the first real public web interface for the brand, built with Astro as a content-first static site.

### Pages

- `/` — Home / current focus / selected proof
- `/build` — Capabilities
- `/projects` — Project proof
- `/thinking` — Public notes
- `/about` — Brand and operating philosophy
- `/contact` — Conversation entry point

### Architecture

```text
Brand docs → Web content/interface → Static deployment → Public feedback
```

There is intentionally **no database, authentication, dashboard, payment system, CRM, or AI chatbot** in V1. Complexity comes only after real usage justifies it.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

The site is designed for static hosting such as Cloudflare Pages. Build command: `npm run build`. Output directory: `dist`.

## Brand principle

> Build systems around real problems, not technology for its own sake.

## Strategic direction

```text
Demand Intelligence
        ↓
Opportunity Database
        ↓
Scoring
        ↓
Action
```

## Repository documents

See `docs/` for the brand foundation, positioning, beliefs, capabilities, audience, content strategy, visual direction, profile structure, posting system, project proof system, public web blueprint, and implementation history.
