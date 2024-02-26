// const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry: './src/index.js'
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'app.bundle.js',
  // },
  plugins: [
    new HtmlWebpackPLugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCSSExtractPlugin(),
  ],
};
