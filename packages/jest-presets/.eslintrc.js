// Uses the react-native ESLint config from the monorepo
const nextConfig = require('@readventure/eslint-config/base.js');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...baseConfig,
    parserOptions: {
      ...baseConfig.parserOptions,
      project: ['./packages/jest-presets/tsconfig.json']
    }
  }
];