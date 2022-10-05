module.exports = {
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    "node_modules/(?!@chakra-ui/accordion/dist/index.cjs)",
  ],
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  coverageProvider: "v8",
};

/*
const { defaults } = require("jest-config");

/** @type {import('jest').Config}
const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts", "cts"],
};

module.exports = config;


*/
