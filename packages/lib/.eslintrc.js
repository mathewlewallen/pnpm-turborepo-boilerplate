// Uses the react-native ESLint config from the monorepo
const nextConfig = require('@readventure/eslint-config/node.js');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...nodeConfig,
    parserOptions: {
      ...nodeConfig.parserOptions,
      project: ['./packages/lib/tsconfig.json'],
    }
  }
];