// Uses the react-native ESLint config from the monorepo
const nextConfig = require('@readventure/eslint-config/react.js');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...reactConfig,
    parserOptions: {
      ...reactConfig.parserOptions,
      project: ['./packages/hooks/tsconfig.json']
    }
  }
];