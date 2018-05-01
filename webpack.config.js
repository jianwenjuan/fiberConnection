'use strict';
// Modules
const path = require('path');
var APP_PATH = path.resolve(__dirname, 'src');
const webpack = require('webpack');
const helpers = require('./webpack/helpers');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


// set the environment by npm lifecycle event , `npm run build` npm_lifecycle_event is build
const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test' || ENV === 'test-watch';
const isProd = ENV === 'build';

module.exports = function () {
    const config = {
        context: helpers.root('./src'),

        entry: {
            'vendor': ['angular', 'angular-ui-router'],
            'app': './app.js',
        },
        output: {
            path: helpers.root('./dist'),
            publicPath: '/',
            filename: isProd ? '[name].[hash:8].js' : '[name].bundle.js',
            chunkFilename: isProd ? '[name].[hash:8].js' : '[name].bundle.js'
        },

        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    loader: 'source-map-loader',
                    exclude: [
                        helpers.root('node_modules/angular'),
                        helpers.root('node_modules/angular-ui-router')
                    ]
                }

            ],
            loaders: [
                
                // { test: require.resolve("jquery"), loader: "expose-loader?$" },
                
                {
                    test: /\.js$/, loaders: ['babel', 'eslint-loader'], exclude: /node_modules/
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.less$/,
                    exclude: helpers.root('./src/css/main.less'),
                    loader: ExtractTextPlugin.extract('css!postcss!less')
                },
                {
                    test: /\.less/,
                    include: helpers.root('./src/css/main.less'),
                    loader: 'style!css!postcss!less'
                },
                {
                    test: /\.html$/, 
                    loader: 'html?root=/&attrs=img:src img:data-src link:href'
                },
                {
                    test: /\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/i,
                    loader: 'file?name=images/[name].[ext]?[hash]'
                },
            ]

        },

        plugins: [
            //vendor
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commons.chunk',
                chunks: ['app']
            }),
            new webpack.optimize.CommonsChunkPlugin('vendor', isProd ? 'vendor.[hash:8].js' : 'vendor.bundle.js'),
            // new webpack.DllPlugin({
            //     path   : 'manifest.json',
            //     name   : "[name]_[hash:8]",
            //     context: helpers.root(".")
            // }),
            // Reference: https://github.com/ampedandwired/html-webpack-plugin
            // Render index.html
            new HtmlWebpackPlugin({
                template: helpers.root('./src/index.html'),
                //inject        : 'body',
                chunks: ['commons.chunk', 'vendor', 'app'],
                chunksSortMode: 'dependency'
            }),
            new HtmlWebpackPlugin({
                filename: 'app.other.html',
                template: helpers.root('./src/index.html'),
                //inject        : 'body',
                chunks: ['commons.chunk.js', 'vendor'],
                chunksSortMode: 'dependency'
            }),
            // Reference: https://github.com/webpack/extract-text-webpack-plugin
            // Extract css files
            new ExtractTextPlugin(isProd ? '[name].[hash:8].css' : '[name].css'),
            //new RenamePlugin()
        ],

        postcss: [
            autoprefixer({
                browsers: ['last 2 version']
            })
        ],

        devServer: {
            contentBase: 'src',
            colors: true,
            historyApiFallback: true,
            port: 7070
        },
        resolve: {
            alias: {
                _components: path.resolve(APP_PATH, 'components'),
                _commonComponents: path.resolve(APP_PATH, 'commonComponents'),
                _config: path.resolve(APP_PATH, 'config'),
                _assets: path.resolve(APP_PATH, 'assets'),
                _server: path.resolve(APP_PATH, 'server')
            }
        }
    };

    if (isProd) {
        config.plugins.push(
            new CleanWebpackPlugin(['dist']),
            // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
            // Only emit files when there are no errors
            new webpack.NoErrorsPlugin(),
            // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
            // Dedupe modules in the output
            new webpack.optimize.DedupePlugin(),
            // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
            // Minify all javascript, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin()

        );
    }

    if (isProd) {
    } else {
        config.devtool = 'source-map';
    }
    config.debug = !isProd || !isTest;
    return config;
}();

