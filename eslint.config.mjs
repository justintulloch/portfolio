import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})




const eslintConfig = [
  ...compat.config({
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
    rules: {
      "no-unused-vars": "off",
      "require-await": "off",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/no-redundant-type-constituents": "error",
       "@typescript-eslint/no-unsafe-assignment": "error",
    },
  }),
  {
    ignores: [
      ".eslintrc.cjs",
      "eslint.config.mjs",
      "node_modules/**",
      ".next/**",
      "out/**",
      "jest.config.js",
      "next.config.js",
      "fragment.glsl",
      "vertex.glsl", 
      "gradient.tsx",
    ],
  },
]

export default eslintConfig