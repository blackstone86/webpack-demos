const express = require('express')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const config = {
  mode: 'development',
  ...require('./webpack.config.js') // 从 webpack.config.js 文件中读取 Webpack 配置
}
// webpack-dev-middleware 中间件配置
const devMiddlewareConf = {
  // 自定义响应标头。注：doc 类型文件请求没有返回自定义标头，js 等其他资源会有自定义标头
  headers: {
    'X-custom-header': 'foo',
    'Y-custom-header': 'bar'
  },
  // 支持请求的方法，必须大写
  methods: ['GET', 'HEAD', 'POST'],
  // 静态资源访问服务器的服务目录
  publicPath: '/',
  // 是否将打包结果写入到磁盘之中，true 时将编译结果输出到 ./dist 目录
  writeToDisk: true,
  // 不打印构建信息，如 asset bundle.js 147 KiB [emitted] (name: main) 1 related asset ...
  stats: 'none' // "none" | "summary" | "errors-only" | "errors-warnings" | "minimal" | "normal" | "detailed" | "verbose" | boolean | object { … }
}
// 用读取到的 Webpack 配置实例化一个 Compiler
const compiler = webpack(config)
// 实例化一个 Expressjs app
const app = express()
// 给 app 注册 webpack-dev-middleware 中间件
app.use(devMiddleware(compiler, devMiddlewareConf))
// 给 app 注册 webpack-hot-middleware 中间件，为了支持模块热替换
app.use(hotMiddleware(compiler))
// 把项目根目录作为静态资源目录，用于服务 HTML 文件
app.use(express.static('.'))
// 启动 HTTP 服务器，监听在 3000 端口
app.listen(3000, () => {
  console.info('Loopback: http://localhost:3000/')
})
