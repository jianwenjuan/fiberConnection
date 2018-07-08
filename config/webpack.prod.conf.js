process.env.NODE_ENV = JSON.stringify('production');

const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const webpackBase = require('./webpack.base.conf');
const pkg = require('../package.json');

const BANNER = `${pkg.name} v${pkg.version} | ${pkg.license} License | ${new Date().toLocaleDateString()}`


module.exports = merge(webpackBase, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[chunkhash].min.js',
  },
  plugins: [
    new webpack.BannerPlugin(BANNER),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      },
      sourceMap: false,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.resolve(__dirname, '../node_modules')
          ) === 0
        )
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
  ],
});