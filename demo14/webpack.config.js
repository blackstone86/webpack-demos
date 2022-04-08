const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // JS 执行入口文件
  entry: './main.ts',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    // vue-loader v15+ 需手动添加 VueLoaderPlugin 插件到 webpack.config.js
    new VueLoaderPlugin()
  ],  
  resolve: {
    // 增加对 TypeScript 的 .ts 和 .vue 文件的支持
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      // 加载 .vue 文件
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/,
      },
      // 加载 .vue 文件中 style 样式 或 .css 文件
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      // 加载 .ts 文件
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // 让 tsc 把 vue 文件当成一个 TypeScript 模块去处理，以解决 moudle not found 的问题，tsc 本身不会处理 .vue 结尾的文件
          appendTsSuffixTo: [/\.vue$/],
        }
      },
    ]
  },
  devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};

