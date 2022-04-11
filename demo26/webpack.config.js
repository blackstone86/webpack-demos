const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { WebPlugin } = require('web-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // JS 执行入口文件
  entry: {
    main: './main.js',
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 提取出 Chunk 中的 CSS 代码到单独的文件中 且 压缩 CSS 代码
        use: [
          MiniCssExtractPlugin.loader, 
          // 转换 .css 文件需要使用的 Loader
          "css-loader"
        ],
      },
      {
        test: /\.png$/,
        type: 'asset', // 注意不要使用 asset/inline ，否则无视条件一律按 inline-loader 方式处理！
        parser: {
          // 30Kb 或以上的文件采用 url-loader，否则用 inline-loader
          dataUrlCondition: {
            maxSize: 30 * 1024 // 30kb
          }
        }    
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'template.ejs', // HTML 模版文件所在的文件路径 https://github.com/jaketrent/html-webpack-template
      appMountIds: ['app'],
    }),
  ]
};
