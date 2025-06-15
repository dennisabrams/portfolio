// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: "https://dennis-abrams.com",
  /*   experimental: {
    responsiveImages: true,
    svg: true,
  }, */
  integrations: [sitemap(), mdx()],
});
