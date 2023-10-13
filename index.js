module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard', 'prettier', 'eslint:recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',

        // These are needed for some of the typescript-eslint type-based linting rules
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    rules: {
        // Unnecessary with TS and generates false positives.
        // https://github.com/typescript-eslint/typescript-eslint/blob/181e705887e9e07f0fa28195644cc94e5b4f039d/docs/linting/Troubleshooting.mdx#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',
        'no-use-before-define': 'off', // Unnecessary with TS and generates false positives.
        'comma-dangle': ['error', 'always-multiline'],
        'func-style': ['error', 'declaration'],
        'no-useless-constructor': 'off',
        'no-unused-vars': 'off',
        'no-extra-semi': 'off',
        'no-trailing-spaces': 'error',
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-unnecessary-condition': ['error'],
        'simple-import-sort/imports': ['error'],
        complexity: ['error', { max: 14 }],
        // To support TS overloads
        // https://github.com/typescript-eslint/typescript-eslint/blob/6fd476c32c4757cb9f4c442f0cd92875671eed30/packages/eslint-plugin/docs/rules/no-redeclare.md
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
    },
}
