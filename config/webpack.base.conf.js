const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const cssLoders = require('./cssloaders.conf');

const LIMITURL = 20000;
const isProduction =  function () {
  return process.env.NODE_ENV === JSON.stringify('production');
};

module.exports = {
  entry: {
    'index': './src/app.js',
  },

  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: isProduction()
        ? ['babel-loader']
        : ['ng-annotate-loader', 'babel-loader', 'eslint-loader'],
    },
    {
      test: /\.html$/,
      use: ['html-loader'],
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          cssLoders.css,
          cssLoders.postCss,
        ],
      }),
    },
    {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          cssLoders.css,
          cssLoders.postCss,
          cssLoders.less
        ],
      }),
    },

    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: LIMITURL,
            name: 'assets/images/[name]-[hash:8].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(woff|woff2|ttf|svg|eot)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: LIMITURL,
            name: 'assets/fonts/[name]-[hash:8].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(mp4|ogg)$/,
      loader: 'file-loader',
    },
    ],
  },
  plugins: [
    //单独生成html文件
    new HtmlWebpackPlugin({
      filename: 'index.html',//生成的html及存放路径，相对于path
      template: 'src/index.html',//载入文件及路径
    }),

    new CopyWebpackPlugin([{
      from: './src/favicon.ico',
      to: './'
    }]),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV,
    }),

    new ExtractTextPlugin(isProduction() ? '[name]-[hash].min.css' : '[name].css'),

  ],
}