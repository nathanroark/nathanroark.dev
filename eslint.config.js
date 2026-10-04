import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist/", ".astro/"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  astro.configs["jsx-a11y-recommended"],
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^\\.{1,2}/",
              message: 'Use the "@/" alias instead of a relative path',
            },
          ],
        },
      ],
    },
  },
]);
