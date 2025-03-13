import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },

    plugins: {
      prettier: pluginObject,
      ...pluginJs.configs.recommended, // ✅ Merge recommended configs here
    },
  },
];
