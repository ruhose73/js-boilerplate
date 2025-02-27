import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    ignores: ["node_modules", "dist", "build"],
  },
];
