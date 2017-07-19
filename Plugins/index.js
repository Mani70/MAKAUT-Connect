const PACKAGE = require('../package.json'),
      webpack = require('webpack');

let banner = PACKAGE.name + ' - ' + PACKAGE.version +
            ' | ' + '(C) ' + new Date().getFullYear() +
            ',  ' + PACKAGE.author + ' | ' + PACKAGE.license +
            ' | ' + PACKAGE.homepage;

module.exports = [
    new webpack.DefinePlugin({
      __DEV__: process.env.BUILD_DEV && 'true'
    }),
    new webpack.BannerPlugin(banner)
];
