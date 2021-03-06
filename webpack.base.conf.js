var path = require('path');
var HtmlwebpackPliugin = require('html-webpack-plugin');



module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    filename: '[name].[hash].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/

      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            css: 'vue-style-loader!css-loader'
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'

      },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // },
      // 自动把这些图片转成BASE64字符串然后内联到CSS里来降低必要的请求数,
      // 图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串。
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },

    ]
  },
  // 实现js入口文件自动注入
  plugins: [
    new HtmlwebpackPliugin({
      inject: 'body',
      template: 'index.html',
      favicon: './src/assets/img/favicon.ico',
      hash: false
    })
  ]
}
