const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // JS 执行入口文件
  entry: {
    main: './src/main.js'
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name]_[chunkhash:8].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
    modules: ['node_modules'], // [path.resolve(__dirname, 'node_modules')],
    // 只采用 main 字段作为入口文件描述字段，以减少搜索步骤
    mainFields: ['main'],
    // 使用 alias 把导入 react 的语句换成直接使用单独完整的 react.min.js 文件，减少耗时的递归解析操作
    alias: {
      react: path.resolve(__dirname, './node_modules/react/index.js'),
      'react-dom/client': path.resolve(
        __dirname,
        './node_modules/react-dom/client.js'
      )
    },
    // 尽可能的减少后缀尝试的可能性
    extensions: ['js']
  },
  module: {
    // 独完整的 react.production.min.js react.development.js 文件就没有采用模块化，忽略这两个文件的递归解析处理
    noParse: [/react\..*\.js$/],
    rules: [
      {
        // 如果项目源码中只有 js 文件就不要写成 /\.jsx?$/，提升正则表达式性能
        test: /\.js$/,
        // babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [
            //   '@babel/preset-env',
            //   '@babel/preset-react'
            // ],
            cacheDirectory: true // 缓存目录 node_modules/.cache/babel-loader
          }
        },
        // 只对项目根目录下的 src 目录中的文件采用 babel-loader
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'template.ejs', // HTML 模版文件所在的文件路径 https://github.com/jaketrent/html-webpack-template
      appMountIds: ['app'],
      chunks: ['main']
    })
  ]
}
