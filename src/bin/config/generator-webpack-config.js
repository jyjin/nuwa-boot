import path from 'path';
import createEntry from '../entry/index';
import loaders from '../loaders/index'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import webpack from 'webpack';

const generatorWebpackConfig = (config) => {

  const output = {
    path: path.resolve(config.root, './dist'),
    filename: '[name].[chunkhash:8].js',
  };
  const template = path.resolve(config.root, "./src/index.html")

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
    })
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
  return webpackConfig
}

export default generatorWebpackConfig;