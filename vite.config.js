import { defineConfig } from "playwright/test";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
