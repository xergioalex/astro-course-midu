import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  telemetry: false,
  server: {
    port: 4321,
    host: true
  },
  adapter: vercel(),
  integrations: [tailwind()]
});