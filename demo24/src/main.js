// 通过 CommonJS 规范导出 show 函数
const show = require('./show.js');

// 通过 ES6 规范导入 show 函数，有可能导致热更新失败
// import show from './show.js';

// 执行 show 函数
show('Webpack5');

// 为了支持模块热替换
if (module.hot) {
  module.hot.accept();
}
