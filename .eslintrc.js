const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync(`${__dirname}/.prettierrc`, 'utf8'));

// http://eslint.org/docs/user-guide/configuring
// https://github.com/prettier/prettier#eslint
module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
  plugins: ['prettier', 'jest'],
  env: {
    jest: true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'jest/no-try-expect': 0,
    'jest/no-test-callback': 0,
    'jest/expect-expect': 0,
    'consistent-return': 0,
    'max-classes-per-file': 0,
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'if', next: '*' }],
    'nonblock-statement-body-position': ['error', 'beside', { overrides: { while: 'below' } }],
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/tests/**', '**/jest.env.setup.js'] },
    ],
  },
};
