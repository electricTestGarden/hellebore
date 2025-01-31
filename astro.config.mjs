// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
        COMIC_NAME: envField.string({ context: "client", access: "public", default: "YOUR COMIC"}), 
    }
  }
})
