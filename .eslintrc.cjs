/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "eslint-plugin-react"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  ignorePatterns: [
    "node_modules",
    ".next",
    "out",
    "jest.config.js",
    "next.config.js",
    "fragment.glsl",
    "vertex.glsl",
    "gradient.tsx",
  ],
  rules: {},
};

module.exports = config;
