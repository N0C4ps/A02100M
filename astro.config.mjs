// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://N0C4ps.github.io',
  base: '/A02100M',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});