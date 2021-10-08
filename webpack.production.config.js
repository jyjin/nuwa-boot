const config = require('./webpack.default.config');
const webpack = require("webpack");

config.plugins.push(
  new webpack.DefinePlugin({
    DEV: JSON.stringify('prod')
  })
)

module.exports = {
  ...config,
  mode: 'prod',
  externals: {
    'React': 'React'
  },
};
