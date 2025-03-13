const conventionalConfig = require("@commitlint/config-conventional");

module.exports = {
  languageOptions: {
    globals: {
      require: "readonly",
      process: "readonly",
      console: "readonly",
      module: "readonly",
    },
  },
  rules: {
    ...conventionalConfig.rules,
  },
  ignores: ["node_modules", "dist", "build"],
};
