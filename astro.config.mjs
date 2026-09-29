// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      iconDir: "src/custom-icons",
      // Applies to svgs in the iconDir directory.
      // Source icons must use a ~256-unit viewBox and render at 12-20px to not look bad
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
  // Inline the ~5kB gzipped stylesheet so no frame can paint before it applies
  build: { inlineStylesheets: "always" },
  vite: {
    plugins: [tailwindcss()],
  },
});
