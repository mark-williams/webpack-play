const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

const extractSass = new ExtractTextPlugin({ 
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer('last 2 versions', 'ie 10')];
              }
            }
          }
        ]
      }
    ]
  },
  // plugins: [
  //   new ExtractTextPlugin('styles.css'),
  //   new webpack.LoaderOptionsPlugin({
  //     options: {
  //       postcss: [
  //         autoprefixer()
  //       ]
  //     }
  //   })
  // ]
};
