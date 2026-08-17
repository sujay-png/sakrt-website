// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.sakrt.in",
  integrations: [sitemap()],
  output: "server",
  adapter: vercel(),
});