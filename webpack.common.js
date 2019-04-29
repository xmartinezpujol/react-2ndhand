const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('olx.styles.css'),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          return;
        }
        console.log(message);
      },
      minify: true,
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    })
  ],
  output: {
    filename: 'olx_bundle.js',
    path: paths.DIST,
    publicPath: '/',
  },
};
