import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://manual.aturnos.com',
  integrations: [mdx()],
  markdown: { shikiConfig: { theme: 'github-light' } }
});
