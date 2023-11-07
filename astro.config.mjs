import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import nodejs from "@astrojs/node";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: nodejs({mode:'development'}),
  integrations: [tailwind(), solidJs()]
});