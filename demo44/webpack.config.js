const path = require('path');
// const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const TerserPlugin = require("terser-webpack-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { WebPlugin } = require('web-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// html-webpack-plugin 需要页面提供的配置
const pages = [
  {
    pageName: 'index', // 页面名称, 对应 pages 目录的子目录名称
    trackingId: 'UA-XXXX-INDEX' // googleAnalytics的trackingId
  },
  {
    pageName: 'login',
    trackingId: 'UA-XXXX-LOGIN'
  }
];
/**
 * 获取 html-webpack-plugin 页面配置对象
 * @param {Object} param 必选 页面配置
 * @param {String} param.pageName 必选 页面名称
 * @param {String} param.trackingId 必选 googleAnalytics的trackingId
 * @returns {Object} html-webpack-plugin 页面配置对象
 */
function getPagePluginConfig({ pageName, trackingId }) {
  return { // 一个 HtmlWebpackPlugin 对应一个 HTML 文件
    inject: false,
    template: 'template.ejs', // HTML 模版文件所在的文件路径 https://github.com/jaketrent/html-webpack-template
    filename: `${pageName}.html`, // 输出的 HTML 的文件名称
    appMountIds: ['app', 'disqus_thread'],
    googleAnalytics: {
      trackingId,
      pageViewOnLoad: true
    },
    scripts: [
      {
        src: 'https://dive-into-webpack.disqus.com/embed.js',
        type: 'module'
      }
    ],
    chunks: [pageName],
  }
}
/**
 * 获取 html-webpack-plugin 页面插件实例
 * @returns {Array} html-webpack-plugin 页面插件实例集
 */
function getPagePlugins() {
  return pages.map(page => {
    const config = getPagePluginConfig(page);
    return new HtmlWebpackPlugin(config);
  })
}
/**
 * 获取入口配置
 * @param {Object} entrys 可选 自定义入口配置，如果页面不在 pages 目录下需要用到
 * @returns {Object} 入口配置
 */
function getEntry(entrys) {
  let ret = {};
  pages.forEach(({ pageName }) => {
    ret[pageName] = [`./pages/${pageName}/index.js`, './common.css'];
  })
  if (Object.prototype.toString.call(entrys) === '[object Object]') {
    ret = { ...ret, ...entrys }
  }
  return ret;
}

module.exports = {
  entry: getEntry(),
  output: {
    filename: '[name]_[chunkhash:8].js',// 给输出的文件名称加上 hash 值
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
        test: /\.css/,// 增加对 CSS 文件的支持
        // 提取出 Chunk 中的 CSS 代码到单独的文件中 且 压缩 CSS 代码
        use: [
          MiniCssExtractPlugin.loader, 
          // 转换 .css 文件需要使用的 Loader
          "css-loader"
        ],
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      // 压缩输出的 JS 代码
      new TerserPlugin({
        terserOptions: {
          format: {
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
          },
          compress: {
            // 在删除没有用到的代码时不输出警告
            warnings: false,
            // 删除所有的 `console` 语句，可以兼容ie浏览器
            drop_console: true,
            // 内嵌定义了但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true,
          }
        },
      }),
      // 压缩输出的 CSS 代码
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        // 提取 react 库
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        // 提取页面公共样式
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          minChunks: pages.length,
          enforce: true
        }
      }
    }
  },
  plugins: [
    ...getPagePlugins(), // 一个 HtmlWebpackPlugin 对应一个 HTML 文件
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`, // 给输出的 CSS 文件名称加上 hash 值
    }),
    new DefinePlugin({
      // 定义 NODE_ENV 环境变量为 production 去除 react 代码中的开发时才需要的部分
      // 'process.env': {
      //   NODE_ENV: JSON.stringify('production')
      // }
    }),
    new BundleAnalyzerPlugin()
  ],
  devtool: 'source-map',
};
