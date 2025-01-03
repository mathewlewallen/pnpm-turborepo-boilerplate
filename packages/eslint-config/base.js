/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'turbo'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:turbo/recommended'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn', 
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-namespace': ['error'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/prefer-namespace-keyword': ['error'],
    'prettier/prettier': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': ['warn'],
    'no-debugger': ['error'],
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'object-shorthand': ['error'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-trailing-spaces': ['error'],
    "@next/next/no-html-link-for-pages": "off",
    "turbo/no-undeclared-env-vars": "warn"
  }
}
