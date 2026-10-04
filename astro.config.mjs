// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      // Applies to svgs in the iconDir directory (src\icons)
      // Source icons must use ~256-unit viewBox and render at 12-20px to not look bad after bundling
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                convertPathData: { floatPrecision: 0, transformPrecision: 1 },
                cleanupNumericValues: { floatPrecision: 3 },
              },
            },
          },
        ],
      },
    }),
  ],
  // Inline gzipped stylesheet to prevent page paint before style sheet applies
  build: { inlineStylesheets: "always" },
  vite: {
    plugins: [tailwindcss()],
  },
});
