module.exports = {
  env: {
    browser: true,
    es2020: true,
		jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
		'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
		'react/prop-types': 'off'
  },
};
