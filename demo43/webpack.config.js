const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // JS 执行入口文件
  entry: {
    main: './main.js'
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name]_[chunkhash:8].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  plugins: [
    new HtmlWebpackPlugin({ // 一个 HtmlWebpackPlugin 对应一个 HTML 文件
      inject: false,
      template: 'template.ejs', // HTML 模版文件所在的文件路径 https://github.com/jaketrent/html-webpack-template
      filename: `index.html`, // 输出的 HTML 的文件名称
      chunks: ['main']
    })
  ],  
  stats: {
    // 开启日志说明，如 ModuleConcatenation bailout: Module is not an ECMAScript module
    // 告诉我们哪个文件因什么原因导致了降级处理
    // webpack 命令行参数 --display-optimization-bailout 被废弃了，用下面方式代替 
    optimizationBailout: true
  }
};
