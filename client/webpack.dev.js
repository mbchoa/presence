const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = WebpackMerge(CommonConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'app': [
      'react-hot-loader/patch',
      './src/index'
    ],
  },
  output: {
    filename: '[name].js'
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      "/api": {
        target: `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}`,
        pathRewrite: { "^/api": "" }
      }
    }
  }
});
