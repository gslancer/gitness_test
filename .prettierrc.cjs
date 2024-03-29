/*
 * @Author: horyan
 * @Date: 2022-12-18 09:30:25
 * @LastEditTime: 2022-12-18 09:30:26
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /Framework/.prettierrc.js
 */
module.exports = {
  printWidth: 100, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, //一个tab代表几个空格数，默认为80
  useTabs: false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
  semi: false, //行位是否使用分号，默认为true
  trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  jsxSingleQuote: true, // jsx语法中使用单引号
  endOfLine: 'auto',
  'prettier.spaceBeforeFunctionParen': true
}