/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:sonarjs/recommended-legacy',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'sonarjs',
        'eslint-plugin-prettier'
    ],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    ignorePatterns: [
        '**/*.spec.ts'
    ],
    root: true
};
