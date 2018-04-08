const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: [path.join(__dirname, '../src/main.js'),],
    vendor: ['vue', 'vue-router', 'axios', 'element-ui', 'vuex']
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'common': path.resolve(__dirname, '../src/common')
    }
  },

  plugins: [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
      title: 'title',
      template: path.join(__dirname, '../index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
  ]
}
