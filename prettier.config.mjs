/** @type {import("prettier").Config} */
export default {
  // Astro file support
  plugins: ['prettier-plugin-astro'],

  // Style preferences
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  printWidth: 100,
  bracketSameLine: false,

  // File-type overrides
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.css'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
