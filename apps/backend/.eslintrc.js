// Extends the node config from our monorepo ESLint rules
const nextConfig = require('@readventure/eslint-config/node.js');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...nodeConfig,
    parserOptions: {
      ...nodeConfig.parserOptions,
      project: ['./apps/backend/tsconfig.json']
    }
  }
];