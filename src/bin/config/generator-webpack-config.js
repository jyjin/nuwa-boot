import path from 'path';
import entry from '../entry/index';
import loaders from '../loaders/index'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import webpack from 'webpack';
import context from '../util/context';


const generatorWebpackConfig = (config) => {

  const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
  };
  console.log('gwww == ', context)
  const template = path.resolve(__dirname, "../../../", "index.html")

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


  let wp = path.resolve(__dirname, "../../../../../../react", "*");
  console.log('333333333 == ', wp, __dirname)

  const devServer = {
    allowedHosts: 'all',
    liveReload: true,
    historyApiFallback: true,
    host: 'localhost',
    watchFiles: {
      paths: [
        path.resolve(__dirname, "../../", "*"),
        path.resolve(__dirname, "../../../../../../react", "*"),
      ]
    },
    open: true,
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
  return webpackConfig
}

export default generatorWebpackConfig;