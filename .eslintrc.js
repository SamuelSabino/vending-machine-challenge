module.exports = {
  env: {
    browser: true,
    jest: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'quote-props': 'off'
  }
}
