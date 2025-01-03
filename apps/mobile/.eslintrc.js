// Uses the react-native ESLint config from the monorepo
const nextConfig = require('@readventure/eslint-config/react-native.js');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...reactNativeConfig, 
    parserOptions: {
      ...reactNativeConfig.parserOptions, 
      project: ['./apps/mobile/tsconfig.json']
    }
  }
];