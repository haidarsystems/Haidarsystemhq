import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://haidarsystemhq.pages.dev',
  integrations: [mdx()],
  output: 'static'
});
