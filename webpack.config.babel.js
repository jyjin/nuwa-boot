const config = require('./webpack.default.config');
const webpack = require("webpack");

config.plugins.push(
  new webpack.DefinePlugin({
    DEV: JSON.stringify('dev')
  })
)

module.exports = {
  ...config,
  mode: 'dev',
  devtool: 'eval',
  externals: {
    'React': 'React'
  },
};
