import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://webapp-2-49t.pages.dev',
  integrations: [mdx()],
  output: 'static'
});
