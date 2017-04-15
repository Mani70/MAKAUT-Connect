const webpack = require('webpack'),
      path = require('path')

let BUILD_DIR = path.resolve(__dirname, 'static/scripts')
let APP_DIR = path.resolve(__dirname, 'components')

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
}
module.exports = config
