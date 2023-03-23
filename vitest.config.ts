import { defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "setupTests.ts",
    root: "src/",
    coverage: {
      provider: "istanbul",
      enabled: true,
      branches: 100,
      statements: 90,
      functions: 90,
      lines: 90,
      all: true,
      exclude: [
        "data/**",
        "main.ts",
        "router/**",
        "**/**{Container, container}.vue",
        "**/{Default, default}**.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src", import.meta.url)),
    },
  },
});
