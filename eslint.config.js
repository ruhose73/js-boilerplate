import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,

  {
    languageOptions: {
      globals: {
        require: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    ignores: ["node_modules", "dist", "build"],
  },
];