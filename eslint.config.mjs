import ts from "typescript-eslint";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      ".git/**",
      "next-env.d.ts"
    ]
  },
  ...ts.configs.recommended,
  {
    files: ["**/*.{ts,tsx,jsx}"],
    ignores: ["**/*.config.*"]
  },
  prettier
];

export default eslintConfig;
