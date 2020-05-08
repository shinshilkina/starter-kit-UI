const path = require('path');
const webpack = require('webpack');
const configurator = require('webpack-config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = new configurator.default().merge({
    entry: './src/entry.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '.'
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProgressPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
        }),/*
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/layout/layout.pug',
            alwaysWriteToDisk: true,
            inject: 'body',
            hash: true,
        }),*/
        new HtmlWebpackPlugin({
            template: './src/pages/landing_page/landing_page.pug',
            filename: './landing_page.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/cards/cards.pug',
            filename: './cards.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/colors&type/colors_type.pug',
            filename: './colors_type.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/filter/filter.pug',
            filename: './filter.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/headers&footers/headers&footers.pug',
            filename: './headers&footers.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/page_elements/page_elements.pug',
            filename: './page_elements.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/registration/registration.pug',
            filename: './registration.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/room_details/room_details.pug',
            filename: './room_details.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/signIn/signIn.pug',
            filename: './signIn.html',
        })
    ].concat(),
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    useRelativePath: true,
                    publicPath: '.'
                },
            },
            {
                test: /[\/]jquery\.js$/,
                use: 'expose-loader?$!expose?jQuery'
            },
        ]
    },
});