import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { flatConfigs as importXConfigs } from 'eslint-plugin-import-x';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default tseslint.config(
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.idea/**',
      '**/.vscode/**',
      '**/public/**',
      'eslint.config.js',
      'stylelint.config.js',
      'prettier.config.js',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      importXConfigs.recommended,
      importXConfigs.typescript,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        project: './tsconfig.json',
      },
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Правило принуждает использовать return со значением в колбеках методов массива (кроме forEach, в forEach можно будет использовать return без значения) [https://eslint.org/docs/latest/rules/array-callback-return]
      'array-callback-return': [
        'warn',
        { checkForEach: true, allowVoid: true },
      ],

      // Правило запрещает использовать await в циклах [https://eslint.org/docs/latest/rules/no-await-in-loop]
      'no-await-in-loop': 'warn',

      // Правило запрещает использование return в constructor [https://eslint.org/docs/latest/rules/no-constructor-return]
      'no-constructor-return': 'error',

      // Правило запрещает дублирование импортов [https://eslint.org/docs/latest/rules/no-duplicate-imports]
      'no-duplicate-imports': [
        'error',
        { includeExports: true },
      ],

      // Правило запрещает использовать return со значением в функции исполнителе промиса [https://eslint.org/docs/latest/rules/no-promise-executor-return]
      'no-promise-executor-return': [
        'error',
        { allowVoid: true },
      ],

      // Правило запрещает сравнивать одинаковые значения (неверный вариант кода let x = 10; if (x === x) { x = 20 };) [https://eslint.org/docs/latest/rules/no-self-compare]
      'no-self-compare': 'warn',

      // Правило запрещает использовать функцию, переменную или класс до ее объявления [https://eslint.org/docs/latest/rules/no-use-before-define]
      'no-use-before-define': 'error',

      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-empty-named-blocks': 'error',
      'import-x/no-import-module-exports': 'error',
      'import-x/group-exports': 'off',
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
          },
          named: {
            types: 'types-first',
          },
        },
      ],

      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'error',

      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  eslintConfigPrettier,
);
