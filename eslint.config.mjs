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
    env: { node: true, jest: true },
    plugins: ['prettier'],
    ...pluginJs.configs.recommended, // ✅ Merge recommended configs here
  },
];
