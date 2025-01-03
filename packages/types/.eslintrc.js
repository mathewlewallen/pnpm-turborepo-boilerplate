// Uses the react-native ESLint config from the monorepo
const nextConfig = require('@readventure/eslint-config/base.js');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...baseConfig,
    rules: {
      ...baseConfig.rules
    },
    parserOptions: {
      ...baseConfig.parserOptions,
      project: ['./packages/types/tsconfig.json']
    }
  }
];