const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = WebpackMerge(CommonConfig, {
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
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  }
});
