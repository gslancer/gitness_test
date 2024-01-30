/*
 * @Author: horyan
 * @Date: 2022-12-23 09:24:03
 * @LastEditTime: 2022-12-26 14:14:41
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/.eslintrc.cjs
 */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest', // 支持的es版本
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
