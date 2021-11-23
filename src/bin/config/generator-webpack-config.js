import path from 'path';
import createEntry from '../entry/index';
import loaders from '../loaders/index'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import WebpackBar from 'webpackbar';
import webpack from 'webpack';

const generatorWebpackConfig = (config) => {

  const output = {
    path: path.resolve(config.root, config.output),
    filename: '[name].[chunkhash:8].js',
  };

  const getPackageInfo = require(path.resolve(config.root, './package.json'))
  console.log('generatorWebpackConfig params === ', config.root, config.isSelf)
  // 这里约束main:'./xxx/xxx.js'的格式，且入口文件必须在第一层

  const template = config.isSelf ?
    path.resolve(config.root, './lib/index.html')
    : '/Users/jyjin/workspace/gitProject/nuwa-app1/react/index.html'

  const plugins = [
    // 分离文件
    new HtmlWebpackPlugin({
      template,
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new webpack.DefinePlugin({
      DEV: JSON.stringify('dev')
    }),
    new WebpackBar({
      name: '🚚  Nuwa',
      color: '#2979ff',
    }),
  ];

  const devServer = {
    allowedHosts: 'all',
    liveReload: true,
    historyApiFallback: true,
    host: 'localhost',
    watchFiles: {
      paths: [
        path.resolve(config.root, "./lib/*"),
        path.resolve(config.root, "./lib/**/**"),
      ]
    },
    open: true,
    port: config && config.port
  }

  const webpackConfig = {
    entry: createEntry(config),
    module: loaders,
    output,
    plugins,
    optimization: {
      splitChunks: {
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
      },
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

  if (config.env === 'development') {
    webpackConfig.devServer = devServer
    webpackConfig.mode = 'development'
  } else if (config.env === 'production') {
    webpackConfig.mode = 'production'
  }
  return webpackConfig
}

export default generatorWebpackConfig;