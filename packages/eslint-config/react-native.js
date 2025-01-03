// packages/eslint-config/react-native.cjs
// ESLint config specialized for React Native with TypeScript
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    'react-native/react-native': true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-hooks',
    'react-native',
    'react-native-a11y' 
  ],
  extends: [
    require.resolve('./base.cjs'),
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/recommended', 
    'plugin:react-native-a11y/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-native/no-inline-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-unused-styles': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react-native',
            group: 'builtin'
          }
        ],
        pathGroupsExcludedImportTypes: ['react-native'],
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/export': 'error',
  }
}
