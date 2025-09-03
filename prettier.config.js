/**
 * @see https://prettier.io/docs/configuration
 * @typedef {import('prettier-plugin-multiline-arrays').MultilineArrayOptions} MultilineOptions
 *
 * @typedef {import('prettier').Options} PrettierOptions
 * @type {PrettierOptions & MultilineOptions}
 */
const config = {
  printWidth: 80,
  singleQuote: true,
  singleAttributePerLine: true,
  endOfLine: 'auto',
  multilineArraysWrapThreshold: 1,
  plugins: ['prettier-plugin-multiline-arrays'],
};
export default config;
