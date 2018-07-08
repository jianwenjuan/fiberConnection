process.env.NODE_ENV = JSON.stringify('development');

const merge = require('webpack-merge');
const path = require('path');
const webpackBase = require('./webpack.base.conf');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const chrome = process.platform === 'win32' ? 'chrome' : 'google-chrome';

module.exports = merge(webpackBase, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  watch: true,
  devtool: '#cheap-module-source-map',
  plugins: [
    // 使用browser-sync实时刷新页面
    new BrowserSyncPlugin({
      server: {
        baseDir: './',
        https: false,
        // middleware: Proxy
      },
      open: 'local',
      ghostMode: false,
      browser: chrome,
      startPath: 'dist/index.html',
      notify: false,

    }),

  ],
});