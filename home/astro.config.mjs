import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://stylebender.vercel.app',
  experimental: {
    redirects: true
  },
  redirects: {
    '/docs/': '/docs/introduction'
  }
});
