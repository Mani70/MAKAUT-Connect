const webpack = require('webpack'),
      path = require('path'),
      PACKAGE = require('./package.json')

var BUILD_DIR = path.resolve(__dirname, 'static/scripts')
var PUBLIC_DIR = path.resolve(__dirname, 'static')
var APP_DIR = path.resolve(__dirname, 'components')

let banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | ' + '(C) ' + new Date().getFullYear() + ',  ' + PACKAGE.author + ' | ' + PACKAGE.license + ' | ' + PACKAGE.homepage

module.exports = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'app.js',
    publicPath: PUBLIC_DIR 
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.BUILD_DEV && 'true'
    }),
    new webpack.BannerPlugin(banner)
  ]
}
