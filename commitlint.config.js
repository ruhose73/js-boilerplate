module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "header-max-length": [2, "always", 72],
  },
};
