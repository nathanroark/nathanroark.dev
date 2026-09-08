// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      // Applies to src/icons only. viewBox is 256 wide and these render at
      // 12-20px, so coordinate precision past integers is invisible weight.
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
