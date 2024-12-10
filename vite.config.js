import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import SortCss from "postcss-sort-media-queries";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    base: command === "build" ? "/" : "",

    root: "src",
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      sourcemap: true,
      rollupOptions: {
        input: "./src/index.html",
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [
      [react()],
      injectHTML(),
      FullReload(["./src/**/**.html"]),
      SortCss({ sort: "mobile-first" }),
    ],
  };
});
