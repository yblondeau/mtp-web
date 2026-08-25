import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yblondeau.github.io',
  base: '/mtp-web/',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap()
  ],
  build: { format: 'directory' }
});
