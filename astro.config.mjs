// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      // Applies to src/icons only. Source icons must use a ~256-unit viewBox
      // and render at 12-20px, so coordinate precision past integers is
      // invisible weight -- a small viewBox would be mangled by floatPrecision 0.
      // Attribute precision stays high: rounding fill-opacity or
      // stroke-dasharray changes how an icon looks.
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
