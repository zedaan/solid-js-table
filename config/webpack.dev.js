const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../build',
    compress: true,
    watchContentBase: true,
    hot: true,
    port: process.env.PORT || 8080,
  },
})
