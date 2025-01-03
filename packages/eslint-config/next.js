// packages/eslint-config/next.cjs
// ESLint config for Next.js + TypeScript projects
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'jsx-a11y',
    'next'
  ],
  extends: [
    require.resolve('./base.cjs'),
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:next/recommended',
    'plugin:next/core-web-vitals'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {

    'next/no-html-link-for-pages': 'error', 
    'next/no-img-element': 'warn', 
    'next/no-before-interactive-script-outside-document': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error'
  }
}
