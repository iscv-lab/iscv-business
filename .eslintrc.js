module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
