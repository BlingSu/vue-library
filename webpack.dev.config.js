const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.png$/,
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
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'title',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}
