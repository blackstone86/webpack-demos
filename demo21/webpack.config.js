const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { WebPlugin } = require('web-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const OfflinePlugin = require('@lcdp/offline-plugin');

module.exports = {
  entry: {
    app: './main.js'// Chunk app 的 JS 执行入口文件
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'), // 输出文件都放到 dist 目录下
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
      filename: `[name].css`, // 给输出的 CSS 文件名称加上 hash 值
    }),
    new OfflinePlugin({
      safeToUseOptionalCaches: true, // 屏蔽 additional、optional 使用警告，使用这两个缓存模块建议保证每个缓存资源有一个唯一名称（如hash后缀）和资源请求URL永久有效
      caches: { // 配置缓存模块，变更缓存模块的资源文件列表，之前的旧版本缓存会被自动删除，新版本缓存启用。缓存更新不需要重启 webpack-dev-server
        main: [ // serviceworker install 事件中缓存资源，最早被缓存，缓存优先级最高，缓存应用最重要的资源（缺少会导致应用运行不了），一旦缓存失败会导致应用不缓存任何资源
          'app.js',
          'app.css',
          'index.html'
        ],
        additional: [ // serviceworker activate 事件中缓存资源，缓存时间晚于 main 缓存模块，优先级次于 main 缓存模块，一旦缓存失败会将缓存失败的资源迁移到 optional 模块
          // '*.woff',
          // '*.woff2'
        ],
        optional: [ // 当资源向服务器发起请求时缓存，:rest: 关键字匹配 main、additional 缓存模块以外的所有静态资源
          ':rest:'
        ]
      },
      ServiceWorker: {
        events: true // 是否暴露 serviceworker install 后的运行时事件。https://github.com/NekR/offline-plugin/blob/master/docs/runtime.md
      }
    })
  ],
  devServer: {
    // Service Workers 依赖 HTTPS，使用 DevServer 提供的 HTTPS 功能。
    // https: true,
  }
};
