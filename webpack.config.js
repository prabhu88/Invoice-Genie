const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const parts = require('./webpack.parts')
const nodeExternals = require('webpack-node-externals')
const PATHS = {
    prod: path.resolve(__dirname, 'prod'),
};
const productionConfig = merge([
    parts.clean(PATHS.prod),
    parts.minifyJavaScript(),
    {
        output: {
            path: PATHS.prod,
            filename: '[name].prod.js',
        },
        plugins: [
            // Ignore stuff
            new webpack.IgnorePlugin(/vertx/),
        ],
        externals: [
            nodeExternals({
                whitelist: [
                    'react-hot-loader',
                    'react-hot-loader/patch',
                    'redux-logger',
                ],
            }),
        ],
    }
])

const developmentConfig = merge([
    parts.analyzeBundle(),
    parts.devServer({
        host: 'localhost',
        port: 3000,
    }),
    {
        output: {
            publicPath: 'http://localhost:3000/',
            filename: './app/index.js',
        },
        plugins: [
            // prints more readable module names in the browser console on HMR updates
            new webpack.NamedModulesPlugin(),
            // Ignore stuff
            new webpack.IgnorePlugin(/vertx/),
        ],
        externals: [
            nodeExternals({
              // Except Webpack Hot Devserver & Emitter so
              // react-hot-loader can work properly
              whitelist: ['webpack/hot/dev-server', 'webpack/hot/emitter'],
            }),
        ],
    }
])

const commonConfig = merge([
    parts.checkDuplicate({
        verbose: true,
        emitError: true,
    }),
    parts.generateSourceMaps({ type: 'none' }),
    {
        target: 'electron-renderer',
        performance : {
            hints: 'warning',
            maxEntrypointSize: 100000, // in bytes
            maxAssetSize: 450000, // in bytes
        },
        entry : {
            tour : [],
            main : ['./app/index.jsx',]
        },
        context: path.resolve(__dirname),
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: [path.resolve(__dirname, 'node_modules')],
                    loader: 'babel-loader',
                },
            ],
        },      
        node: {
            __dirname: false,
            __filename: false,
        },
    }
])

module.exports = env => {
    if (env && env.production) {
      return merge(productionConfig, commonConfig);
    }
    return merge(developmentConfig, commonConfig);
};