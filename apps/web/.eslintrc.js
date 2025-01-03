// This file is used to extend the base configuration for Next.js projects.
const nextConfig = require('@readventure/eslint-config/next.js');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...nextConfig,
    parserOptions: {
      ...nextConfig.parserOptions,
      project: ['./apps/web/tsconfig.json']
    }
  }
];