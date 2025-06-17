module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'prettier',
        'eslint:recommended',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
    ],
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

        // Allows idiomatic infinite loops, rejects other cases
        'no-constant-condition': ['error', { checkLoops: false }],

        'no-useless-constructor': 'off',
        'no-unused-vars': 'off',
        'no-extra-semi': 'off',
        'no-trailing-spaces': 'error',

        // Doesn't complain when we have let {a, b} = obj and b is not reassigned,
        // complains otherwise.
        'prefer-const': ['error', { destructuring: 'all' }],

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

        /*
        @typescript-eslint/recommended-type-checked exceptions

        To be determined if we want to keep these rules disabled long-term, at least some
        of these look useful, we just need to configure them so they don't generate so many
        false positives.
        */

        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/unbound-method': 'off',

        // Being able to use and interact with "any" values
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',

        // Generates a lof of false positives when it doesn't always understand when a value
        // can be safely used in a string context. We can try to configure this behavior.
        '@typescript-eslint/no-base-to-string': 'off',

        // Prevents using Big (among others) in string templates
        '@typescript-eslint/restrict-template-expressions': 'off',

        /*
        End of @typescript-eslint/recommended-type-checked exceptions
        */

        'n/handle-callback-err': ['error', '^(err|error)$'],
        'n/no-callback-literal': 'error',
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/process-exit-as-throw': 'error',
    },
}
