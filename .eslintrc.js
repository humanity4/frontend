// cSpell:disable
/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    '@remix-run/eslint-config',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-import',
    'jsx-a11y',
    'eslint-plugin-jsdoc',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-react',
    // 'eslint-plugin-jest',
    'eslint-plugin-no-null',
    // 'eslint-plugin-lodash',
    'prettier',
    '@typescript-eslint',
  ],
  rules: {
    // Modified for Axiom:
    'arrow-body-style': 'off',
    complexity: 'off',
    'import/order': 'off',
    'max-lines': 'off',
    'no-case-declarations': 'off',
    'no-shadow': 'off', // replaced by @typescript-eslint/no-shadow
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': ['error'],
    '@typescript-eslint/member-ordering': 'off', // Would be nice to configure this but couldn't find the settings that most closely match our code.
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // Added by tslint-to-eslint-config:
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/semi': ['off', null],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-parens': ['off', 'always'],
    'brace-style': ['off', 'off'],
    'comma-dangle': 'off',
    'constructor-super': 'error',
    curly: 'error',
    'default-case': 'off',
    'dot-notation': 'error',
    'eol-last': 'off',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-denylist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-internal-modules': 'off',
    'import/no-unassigned-import': 'off',
    indent: 'off',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-types': 'error',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/lang': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
    'linebreak-style': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'max-statements': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'dir',
          'time',
          'timeEnd',
          'timeLog',
          'trace',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'debug',
          'info',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context',
        ],
      },
    ],
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'off',
    'no-magic-numbers': 'off',
    'no-multi-str': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-null/no-null': 'off',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-imports': 'off',
    'no-restricted-syntax': [
      'error',
      {
        message: 'Forbidden call to document.cookie',
        selector: 'MemberExpression[object.name="document"][property.name="cookie"]',
      },
    ],
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'off',
      {
        location: 'anywhere',
        terms: ['BUG', 'HACK', 'FIXME', 'LATER', 'LATER2', 'TODO'],
      },
    ],
    'no-with': 'error',
    'object-shorthand': ['error', 'never'],
    'one-var': ['error', 'never'],
    'padded-blocks': [
      'off',
      {
        blocks: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'prefer-arrow/prefer-arrow-functions': 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    quotes: 'off',
    radix: 'off',
    'react/jsx-curly-spacing': ['off', {}],
    'react/jsx-equals-spacing': 'off',
    'react/jsx-tag-spacing': [
      'off',
      {
        afterOpening: 'allow',
        closingSlash: 'allow',
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'],
    'use-isnan': 'error',
    'valid-typeof': 'off',
    yoda: 'error',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // Allow {} in .tsx files becuase we frequently do:
        // export class MyComponent extends React.Component<{}, Partial<MyComponentState>>
        '@typescript-eslint/ban-types': [
          'error',
          {
            extendDefaults: true,
            types: {
              '{}': false,
            },
          },
        ],
      },
    },
    // Turn off prettier for certain files
    {
      files: [],
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
};
