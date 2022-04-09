const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { WebPlugin } = require('web-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  entry: {
    app: './main.js'// Chunk app 的 JS 执行入口文件
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css/,// 增加对 CSS 文件的支持
        // 提取出 Chunk 中的 CSS 代码到单独的文件中 且 压缩 CSS 代码
        use: [
          MiniCssExtractPlugin.loader, 
          // 转换 .css 文件需要使用的 Loader
          "css-loader"
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'template.ejs', // HTML 模版文件所在的文件路径 https://github.com/jaketrent/html-webpack-template
      appMountIds: ['app'],
    }),
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`, // 给输出的 CSS 文件名称加上 hash 值
    }),
    // new ServiceWorkerWebpackPlugin({
    //   // 自定义的 sw.js 文件所在路径
    //   // ServiceWorkerWebpackPlugin 会把文件列表注入到生成的 sw.js 中
    //   entry: path.join(__dirname, 'sw.js'),
    // }),
  ],
  devServer: {
    // Service Workers 依赖 HTTPS，使用 DevServer 提供的 HTTPS 功能。
    https: true,
  }
};
