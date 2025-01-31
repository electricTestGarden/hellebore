// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
        COMIC_NAME: envField.string({ context: "client", access: "public", default: "YOUR COMIC"}), 
        SHOP_LINK: envField.string({ context: "client", access: "public", default: ""}), 
        COPYRIGHT_START: envField.string({ context: "client", access: "public", default: "1999"}), 
    }
  }
})
