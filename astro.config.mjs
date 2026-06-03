import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://athinglikethat.blog',
  legacy: {
    collectionsBackwardsCompat: true,
  },
});
