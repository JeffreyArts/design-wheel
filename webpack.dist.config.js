const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // Use Terser Plugin for JS minification
const { findIndex } = require('lodash');
const gutil = require('gulp-util');
const printError = (err) => gutil.log(gutil.colors.bgRed(gutil.colors.white(err)));

if (process.env.NODE_ENV && !['production', 'prototype'].includes(process.env.NODE_ENV)) {
  printError(`You're trying to build for '${process.env.NODE_ENV}' but building is meant for production environment`);
  printError(`Try setup your environment to 'production' or 'prototype'`);
}

const environment = require('./config')(process.env.NODE_ENV || 'production');

// Set output directory to /dist
config.output = {
  filename: '[name].bundle.js',
  publicPath: '', // Public path for serving files
  path: path.resolve(__dirname, 'dist') // Set the output directory to /dist
};

// Update SCSS rule to use MiniCssExtractPlugin loader
const extractCssPropIndex = findIndex(config.module.rules, { test: /\.scss$/ });
if (extractCssPropIndex !== -1) {
  config.module.rules[extractCssPropIndex] = {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader, // Extracts CSS into separate files
      { loader: 'css-loader' }, // Handles CSS imports
      { loader: 'sass-loader' } // Handles SCSS to CSS
    ]
  };
}

// Update plugins for JS minification and CSS extraction
config.plugins = config.plugins.concat([
  // Use Terser Plugin for minimizing JavaScript
  new TerserPlugin({
    terserOptions: {
      mangle: {
        reserved: ['$super', '$', 'exports', 'require', 'angular']
      },
      compress: {
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        collapse_vars: true,
        reduce_vars: false
      },
      output: {
        comments: false,
      }
    }
  }),

  new webpack.LoaderOptionsPlugin({
    minimize: true, // Enable minimization
    debug: false
  }),

  // Extract CSS into app.css and place it in the dist folder
  new MiniCssExtractPlugin({
    filename: 'app.css' // Output CSS file name
  }),

  // Pass environment variables for usage in the code
  new webpack.DefinePlugin({ environment })
]);

module.exports = config;
