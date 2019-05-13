/* eslint import/no-extraneous-dependencies: "off" */

const webpack = require('webpack');
const merge = require('webpack-merge');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const common = require('./webpack.minify.js');

module.exports = (siteUrl) => merge(common, {
  mode: 'production',
  plugins: [
    new SitemapPlugin(siteUrl, ['/']),
  ],
});
