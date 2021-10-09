import fs from 'fs';
import path from 'path';
import entry from '../entry/index.mjs';
import loaders from '../loaders/index.mjs'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import _ from '../../util.mjs'
const { __dirname } = _;
// const fs = require('fs');
// const path = require('path');
// const entry = require('../entry').default
// const laoders = require('../loaders').default

const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[chunkhash:8].js',
};

const plugins = [
  // 分离文件
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: 'index.css',
  }),
];


const devServer = {
  allowedHosts: 'all',
  hot: true,
  historyApiFallback: true,
  host: 'localhost',
}

const webpackConfig = {
  entry,
  module: loaders,
  output,
  plugins,
  devServer,
  mode: 'development',
  optimization: {
    splitChunks: {},
    minimizer: [
      // 有时候webpack会默认优化z-index值，设置默认不优化
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    ]
  }
}

export default webpackConfig;

// console.log(path.resolve('../../../lib'))
// console.log(__dirname)

// function createDir() {
//   fs.mkdir('lib', { recursive: true }, function (err) {
//     if (err) {
//       return console.error(err);
//     } else {
//       console.log("目录创建成功。");
//       writeFile()
//     }
//   });
// }

// function writeFile() {
//   fs.writeFile('lib/webpack.config.js', JSON.stringify(config, null, 2), (err) => {
//     if (err) {
//       console.log('err == Append error!', err)
//     }
//   })
// }

// createDir();
