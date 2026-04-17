import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://3ingredientcocktail.github.io',
  base: '/a-thing-like-that',
  legacy: {
    collectionsBackwardsCompat: true,
  },
});