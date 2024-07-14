import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    preview: {
      port: 3000
    },
    base: "",
    // envPrefix: "", // to set custom prefix instead of VITE_
    css: { devSourcemap: true },
    build: {
      outDir: "./build", // change default output directory from dist to build
      emptyOutDir: true
    }
  };
});
