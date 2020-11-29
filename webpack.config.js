const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    entry: ['@babel/polyfill', './src/main.js', './src/another-module.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: { contentBase: path.resolve(__dirname, 'public') },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images/',
                        outputPath: 'images/'
                    }
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
}