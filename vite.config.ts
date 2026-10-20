import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function copyClinicAssets(): Plugin {
  const assets = [
    "unnamed.webp",
    "unnamed (1).webp",
    "unnamed (2).webp",
    "unnamed (3).webp",
    "unnamed (4).webp",
    "favicon.svg"
  ];

  return {
    name: "copy-clinic-assets",
    apply: "build",
    async closeBundle() {
      const outputDirectory = resolve(process.cwd(), "dist");
      await Promise.all(
        assets.map((asset) =>
          copyFile(resolve(process.cwd(), asset), resolve(outputDirectory, asset))
        )
      );
    }
  };
}

export default defineConfig({
  base: "/Dr-Salma-LAHLOU/",
  plugins: [react(), tailwindcss(), copyClinicAssets()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    cssMinify: true
  }
});