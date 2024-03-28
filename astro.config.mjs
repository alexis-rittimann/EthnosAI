import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [tailwind(), mdx(), sitemap(), alpinejs()],
  output: 'server',
  adapter: netlify(),
  edgeMiddleware: true

});