const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // TS 执行入口文件
  entry: {
    main: './main'
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    // 先尝试 ts，tsx 后缀的 TypeScript 源码文件
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // 一个 HtmlWebpackPlugin 对应一个 HTML 文件
      inject: false,
      template: 'template.ejs', // HTML 模版文件所在的文件路径 https://github.com/jaketrent/html-webpack-template
      filename: `index.html`, // 输出的 HTML 的文件名称
      chunks: ['main'],
      bodyHtmlSnippet: '<app-root></app-root>',
    })
  ],
  devtool: 'source-map',// 输出 SourceMap 方便在浏览器里调试 TS 代码
};
