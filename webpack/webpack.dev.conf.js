const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


function resolve() {
    return path.resolve(__dirname, '..')
  }

module.exports = {
    mode: "development", 
    entry: {
        index: "./components/index.tsx",
    },
    output: {
        filename: 'js/index.js',            
        path: path.resolve(__dirname, '../dist') 
    },
    devServer: { 
        hot: true,
        contentBase: path.resolve(__dirname, '../dist') 
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", '.tsx', '.js', '.json'],
        alias: {
            components: resolve() + '/components',
            types: resolve() + '/types'
          }
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false,
                },
            }),
        ],
    },
    module: { 
        rules: [ 
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('autoprefixer')("last 100 versions"),
                            require('cssnano')(),
                            require('postcss-preset-env')()
                        ]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ['sass-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: 'components', 
                        publicPath: "../"
                    },
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        context: 'components',
                        name: '[path][name].[hash:7].[ext]'
                    }
                }]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:7].css",
            chunkFilename: "css/[id].[hash:7].css",
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}