import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  telemetry: false,
  server: {
    port: 4321,
    host: true
  },
  adapter: vercel()
});