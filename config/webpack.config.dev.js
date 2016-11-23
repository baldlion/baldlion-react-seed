const webpack = require('webpack');
const path = require('path');
const postcss = require('postcss');
const precss = require('precss');
const mixins = require('postcss-mixins');
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const cssimport = require('postcss-import');
const custommedia = require('postcss-custom-media');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const env = require('dotenv').config();
const port = env.PORT || 3000;

module.exports = {
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    paths.appIndexJs
  ],

  output: {
    path: path.resolve(__dirname, paths.appDist),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        include: paths.appSrc,
        loader: 'babel',
        query: {
          presets: ['react', 'babel-preset-es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
          cacheDirectory: {
            name: 'baldlion-react-seed'
          }
        }
      },
      {
        test: /\.(css)$/,
        include: paths.appSrc,
        loader: 'style!css?importLoaders=1!postcss'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '']
  },

  postcss: function () {
    return [
      cssimport({path: paths.appStyles}),
      custommedia(),
      precss,
      lost(),
      mixins,
      cssnext({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9'
        ]
      })
    ];
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};