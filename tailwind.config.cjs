/*
 * @Author: horyan
 * @Date: 2022-12-23 09:24:22
 * @LastEditTime: 2022-12-23 10:46:05
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/tailwind.config.cjs
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
