import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // 开启响应式语法糖
  plugins: [vue({ reactivityTransform: true })],
  server: {
    port: 9010,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@p": fileURLToPath(new URL("./packages", import.meta.url)),
    },
  },
});
