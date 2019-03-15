module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'arrow-body-style': 0,
    'arrow-spacing': 2,
    'curly': 2,
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'new-cap': [2, {newIsCap: true, capIsNew: false}],
    'no-console': ['warn'],
    'no-underscore-dangle': 0,
    'no-unused-vars': [2, {args: 'all', argsIgnorePattern: '^__', varsIgnorePattern: '^__'}],
    'no-useless-escape': 0,
    'object-curly-spacing': [2, 'never'],
    'prefer-spread': 2,
  }
};