const path = require('path');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

module.exports = {
  entry: [
    // 为了支持模块热替换
    'webpack-hot-middleware/client',
    // JS 执行入口文件
    './src/main.js'
  ],
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下，path 默认输出到 path.resolve(__dirname, './dist')
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    // 为了支持模块热替换
    new HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
};
