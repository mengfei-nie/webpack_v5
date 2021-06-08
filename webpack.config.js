const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [{ loader: 'svg-sprite-loader' }],
      },
    ],
  },
  plugins: [
    //   new webpack.optimize.ModuleConcatenationPlugin()
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]|\.svg$/,
          name: 'vendors-svg',
          chunks: 'all',
        },
      },
    },
  },
};
