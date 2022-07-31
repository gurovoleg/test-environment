const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
  },

  /*
    @babel/eslint-parser is a parser that allows ESLint to run on source code that is transformed by Babel
    ESLint's default parser and core rules only support the latest final ECMAScript standard and do not support experimental (such as new features)
    and non-standard (such as Flow or TypeScript types) syntax provided by Babel.
    No need when do not use experimental functions or FLow/Typescript
    P.S. @babel/eslint-plugin is also required
  */
  parser: '@babel/eslint-parser',
  parserOptions: {
    // version of ECMAScript syntax
    ecmaVersion: 6, // ECMAScript 5 by default
    /*
      set to "module" when use ECMAScript modules ('script' by default)
      no need when use @babel/eslint-parser as parser
    */
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // included in eslint-plugin-react
    },
  },
  /*
    Plugins provide custom additional rules. When we add plugin to our config we just activate it (inform Eslint that we have additional package of rules).
    But then we have to set these rules manually in 'rules' section.
    Plugins may also provide pre-defined configs which could be added to 'extends' section
  */
  plugins: [
    /*
      Rules for @babel/eslint-parser. Parser does a great job at adapting eslint for use with Babel, but it can't change the built-in rules
      to support experimental features. Plugin re-implements problematic rules, so they do not give false positives or negatives.
    */
    '@babel/eslint-plugin', // can be shorthanded to @babel
    'import',
  ],

  /*
    Set of pre-defined rules. Here we can add set of rules from installed eslint-config-.. or eslint-plugin-.. packages (plugin should include config).
    When using plugin (with included config) then add as plugin:<plugin name>/<configuration>. And no need to add smth in plugins section because
    it is done in plugin library.
    E.g. - plugin:prettier/recommended - it means get plugin prettier with recommended configuration
  */
  extends: [
    'eslint:recommended',
    /*
      Enables the config from eslint-config-prettier, which turns off some ESLint rules that conflict with Prettier
      Registers prettier plugin
      Runs Prettier from within ESLint
      https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    */
    'plugin:prettier/recommended',
    // React specific linting rules for eslint - recommended configuration (eslint-react-plugin has 3 set of configs - all, recommended and jsx-runtime)
    'plugin:react/recommended',
    // disable the relevant React rules when use the new JSX transform (>= React 17)
    'plugin:react/jsx-runtime',
    // custom community rules
    'plugin:sonarjs/recommended',
  ],
  rules: {
    // disable props types validation
    'react/prop-types': 'off',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    // enforce a maximum number of parameters in function definitions
    'max-params': ['error', 3],
    // requires or disallows a line break between in object literals
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: { minProperties: 3 },
        ObjectPattern: { multiline: true },
        ExportDeclaration: 'never',
        ImportDeclaration: { multiline: true },
      },
    ],
    // requires or disallows blank lines between the given 2 kinds of statements
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'import'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['import'],
        next: ['import'],
      },
    ],
  },
  settings: {
    // React version. "detect" automatically picks the version you have installed. Need to set to avoid warning
    react: {
      version: 'detect',
    },
  },
};
