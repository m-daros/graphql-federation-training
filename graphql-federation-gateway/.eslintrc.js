module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
//    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    jasmine: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-underscore-dangle': 'off',
    'func-call-spacing': 'off',
    'no-spaced-func': 'off',
    'no-whitespace-before-property': 'off',
    'space-in-parens': 'off',
    'array-bracket-spacing': 'off',
    'padded-blocks': 'off',
    'brace-style': 'off',
    'arrow-parens': 'off',
    'no-trailing-spaces': 'off',
    'space-unary-ops': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off'
  }
};
