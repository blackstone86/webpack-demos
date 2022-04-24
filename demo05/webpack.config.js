const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env = {}, argv) {
  const isProduction = env['production']

  // 压缩 JS 代码
  const optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false
          },
          compress: {
            // 在删除没有用到的代码时不输出警告
            warnings: false,
            // 删除所有的 `console` 语句，可以兼容ie浏览器
            drop_console: true,
            // 内嵌定义了但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true
          }
        }
      })
    ]
  }

  const config = {
    // JS 执行入口文件
    entry: {
      main: './main.js'
    },
    output: {
      // 把所有依赖的模块合并输出到一个 bundle.js 文件
      filename: '[name]_[chunkhash:8].js',
      // 输出文件都放到 dist 目录下
      path: path.resolve(__dirname, './dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        // 一个 HtmlWebpackPlugin 对应一个 HTML 文件
        inject: false,
        template: 'template.ejs', // HTML 模版文件所在的文件路径 https://github.com/jaketrent/html-webpack-template
        filename: `index.html`, // 输出的 HTML 的文件名称
        chunks: ['main']
      })
    ],
    // 在生成环境不输出 Source Map
    devtool: isProduction ? undefined : 'source-map'
  }

  // 在生成环境才压缩
  if (isProduction) {
    config.optimization = optimization
  }

  return config
}
