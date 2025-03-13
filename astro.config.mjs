// @ts-check
import { defineConfig, envField } from 'astro/config';
import { loadEnv } from "vite";

import compress from "astro-compress";

const { BASE, SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "") || "";

// https://astro.build/config
export default defineConfig({
  base: BASE,
  site: SITE_URL, 
  env: {
    schema: {
        COMIC_NAME: envField.string({ context: "client", access: "public", default: "YOUR COMIC"}), 
        COMIC_DESCRIPTION: envField.string({ context: "client", access: "public", default: ""}), 
        HEADER_IMAGE_PATH: envField.string({ context: "client", access: "public", default: ""}), 
        SHOP_LINK: envField.string({ context: "client", access: "public", default: ""}), 
        COPYRIGHT_START: envField.string({ context: "client", access: "public", default: "1999"}), 
        FOOTER_IMAGE_PATH: envField.string({ context: "client", access: "public", default: "/assets/images/your-image.png"}), 
        FOOTER_IMAGE_ALT_TEXT: envField.string({ context: "client", access: "public", default: "A fun footer image. This is a default description. Please update this for accessibiltiy!"}), 
    }
  },
  vite: {
    build: {
        minify: true,
        cssMinify: true,
    }
  },
  integrations: [compress()]
})