import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.javascript100.dev',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});