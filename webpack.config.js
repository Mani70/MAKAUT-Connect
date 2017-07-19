const path    = require('path'),
      plugins = require('./Plugins');

var BUILD_DIR  = path.resolve(__dirname, 'Static/Assets/js'),
    PUBLIC_DIR = path.resolve(__dirname, 'Static'),
    APP_DIR    = path.resolve(__dirname, 'Views');

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
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
  plugins: plugins
};
