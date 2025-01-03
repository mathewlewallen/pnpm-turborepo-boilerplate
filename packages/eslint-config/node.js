// packages/eslint-config/node.cjs
// ESLint config specialized for Node.js & TypeScript projects
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true 
  },
  plugins: ['node'],
  extends: [
    require.resolve('./base.cjs'),
    'plugin:node/recommended'
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': ['warn'], 
    'node/no-deprecated-api': ['error'],
    'node/no-extraneous-import': ['error'],
    'node/no-extraneous-require': ['error'],
    'node/no-missing-import': 'off', 
    'node/no-missing-require': ['error'],
    'node/no-unpublished-import': 'off',  
    'node/no-unpublished-require': 'off',  
    'node/no-unsupported-features/node-builtins': ['error']
  }
}
