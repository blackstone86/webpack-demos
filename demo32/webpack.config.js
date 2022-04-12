const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const clientEntry = 'webpack-dev-server/client/index.js';

/**
 * 
  // 【失败】单独抽代理客户端
  entry: {  
    client: clientEntry,
    main: [
      './main.js',
    ],
    sub: [
      './sub.js'
    ]
  }

  // 【失败】每个入口注入代理客户端，当出2个入口或以上会异常
  entry: {
    main: [
      clientEntry, 
      './main.js',
    ],
    sub: [
      clientEntry, 
      './sub.js'
    ]
  }

  // 【成功】单个入口可自行注入代理客户端，在 webpack-dev-server --no-client 下能自动刷新浏览器
  // 经验所得，不要设置--no-client即可
  entry: {
    main: [
      clientEntry, 
      './main.js',
    ]
  }

  // 【成功】单个入口可自行注入代理客户端，在 webpack-dev-server --no-client 下能自动刷新浏览器
  entry: {
    main: [
      clientEntry, 
      './main.js',
      './sub.js'
    ]
  }

 */
module.exports = {
  // JS 执行入口文件
  entry: {
    main: [
      clientEntry,
      './main.js',
      './sub.js'
    ]
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
        use: ['babel-loader'],
        // 排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        // 提取出 Chunk 中的 CSS 代码到单独的文件中 且 压缩 CSS 代码
        use: [
          // 转换 .css 文件需要使用的 Loader
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // 一个 HtmlWebpackPlugin 对应一个 HTML 文件
      inject: false,
      template: 'template.ejs', // HTML 模版文件所在的文件路径 https://github.com/jaketrent/html-webpack-template
      filename: `index.html`, // 输出的 HTML 的文件名称
      appMountIds: ['main', 'sub'],
      chunks: [
        'main'     
      ],
    }),
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`,
    }),
  ],
  // 输出 source-map 方便直接调试 ES6 源码
  devtool: 'source-map',
};
