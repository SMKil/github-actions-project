// import globals from 'globals';
// import pluginJs from '@eslint/js';

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {
//     files: ['**/*.js'],
//     languageOptions: {
//       sourceType: 'commonjs',
//       globals: globals.node,
//     },

//     plugins: {
//       prettier: pluginObject,
//       ...pluginJs.configs.recommended, // ✅ Merge recommended configs here
//     },
//   },
// ];

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
