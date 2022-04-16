const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // JS 执行入口文件
  entry: {
    main: './main_browser.js',
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name]_[chunkhash:8].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react']
          // }
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // 一个 HtmlWebpackPlugin 对应一个 HTML 文件
      inject: false,
      template: 'template.ejs', // HTML 模版文件所在的文件路径 https://github.com/jaketrent/html-webpack-template
      filename: `index.html`, // 输出的 HTML 的文件名称
      chunks: ['main'],
      appMountIds: ['app']
    })
  ],
  devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};
