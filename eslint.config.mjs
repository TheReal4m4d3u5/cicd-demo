import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];