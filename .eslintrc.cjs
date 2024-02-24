module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  ignorePatterns: [
    'node_modules',
    'dist',
    'vite.config.ts',
    '.eslintrc.cjs',
    'commitlint.config.js',
    '**/__tests__/**'
  ], // <<< ignore all files in test folder
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "space-before-function-paren": "error"
  }
}
