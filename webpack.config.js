/**
 1、启动server,模块热替换
 2、JS模块化开发
 3、编译SASS，less，CSS抽离
 4、Mock数据
 5、版本控制
 6、devtool
 7、合并压缩
 8、环境切换
*/

// 引入webpack
var webpack = require('webpack')

// 引入文本抽离插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// 引入html生成插件
var HtmlWebpackPlugin = require('html-webpack-plugin')

// 引入openBrowser 插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

var outputDir = ''

if (process.env.NODE_ENV === 'dev') {
  outputDir = '/dev'
} else {
  outputDir = '/prod'
}

var public = {
  // 配置入口
  entry: {
    'scripts/app': './src/scripts/app.js'
  },

  // 配置出口
  output: {
    filename: '[name].js',
    path: __dirname + outputDir  // 必须是绝对路径
  },

  // devtool 配置
  devtool: 'source-map',

  // 别名配置
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'styles': __dirname + '/src/styles'
    }
  },

  // 配置模块
  module: {
    rules: [
      // 解析ES6+
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules下.js的解析
        use: [
          {
            loader: 'babel-loader' // 应用babel-loader解析ES6+
          }
        ]
      },

      // 加载Vue 单文件组件
      {
        test: /\.vue$/,
        exclude: /node_modules/, // 排除node_modules下.js的解析
        use: [{
          loader: 'vue-loader'
        }]
      },

      // 加载scss
      {
        test: /\.scss$/,
        use:
        //[
          // { loader: 'style-loader' },
          // { loader: 'css-loader' },
          // { loader: 'sass-loader' }
        //]
        // CSS抽离
          ExtractTextPlugin.extract({
            fallback: 'vue-style-loader',
            use: ['css-loader', 'sass-loader', {
              loader: 'sass-resources-loader',
              options: {
                resources: [__dirname + '/src/styles/app.scss', __dirname + '/src/styles/modules/common.scss']
              }
            }]
          })
      },

      // 加载css
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },

      // 加载图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: 'media/images/[name].[ext]'
        }
      },

      // 加载媒体文件
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/mp4/[name].[hash:7].[ext]'
        }
      },

      // 加载iconfont
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: 'media/iconfont/[name].[ext]'
        }
      }
    ]
  },

  // 配置插件
  plugins: [
    // 生成抽离文本文件插件的实例
    new ExtractTextPlugin({
      filename: (getPath)=>{
        return getPath('[name].css').replace('scripts', 'styles')
      },
      allChunks: true
    }),

    // 生成编译HTML(index.html)的插件的实例
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['scripts/app']
    }),

    // 生成编译HTML(search.html)的插件的实例
    // new HtmlWebpackPlugin({
    //   template: './src/search.html',
    //   filename: 'search.html',
    //   chunks: ['scripts/search']
    // }),

    // 代码压缩
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   }
    // }),

    // 自动在打开浏览器打开页面
    // new OpenBrowserPlugin({
    //   url: 'http://localhost:4000'
    // })
  ],

  // externals
  externals: {
    'vue': 'window.Vue',
    'vue-router': 'window.VueRouter',
    'axios': 'window.axios'
  }
}

var devserver = { // 配置webserver
  devServer: {
    host: 'localhost',
    port: 4000,
    contentBase: __dirname + outputDir,
    noInfo: true,
    proxy: {
      '/api': {
        target: 'https://api.douban.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/vip': {
        target: 'http://localhost:9000/',
        changeOrigin: true,
        pathRewrite: {
          '^/vip': ''
        }
      }
    }
  }
}

if (process.env.NODE_ENV === 'dev') {
  module.exports = Object.assign({}, public, devserver)
} else {
  module.exports = public
}
