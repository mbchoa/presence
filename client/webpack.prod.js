const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = WebpackMerge(CommonConfig, {
  entry: {
    'app': './src/index'
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
  ]
});
