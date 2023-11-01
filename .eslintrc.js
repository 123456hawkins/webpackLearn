module.exports = {
  // 继承其他规则
  extends: ['eslint:recommended'],
  env: {
    node: true, //启用node中全局变量
    browser: true, //启用浏览器中全局变量
  },
  // 解析选项
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  // 具体检查规则
  rules: {
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    // semi: 'error', //禁止使用分号
    'array-callback-return': 'warn',
    'default-case': [
      'warn', //要求switch语句中右default分支,否则警告
      { commentPattern: '^no default$' }, //允许最后注释no default ,就不会警告
    ],
    eqeqeq: [
      'warn', //强制使用===和!==否则警告
      'smart', //https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告
    ],
  },
}
