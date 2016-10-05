var path = require('path');

var autoprefixer = require('autoprefixer');
var doiuse = require('doiuse');
var cssnext = require('postcss-cssnext');
var csswring = require('csswring');
var nested = require('postcss-nested');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/js/app.js'],
    },
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '/assets/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.jpe?g|\.png|\.mp3$/,
                loader: 'file-loader',
            },
            {
                test: /\.html?$/,
                loader: 'html',
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: 'imports?jQuery=jquery'
            },
        ],
    },
    postcss: [
        nested,
        cssnext,
        doiuse,
        autoprefixer,
        csswring,
    ],
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
};
