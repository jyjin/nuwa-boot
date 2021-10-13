import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server'
import defaultWebpackConfig from './make-webpack/config/generator-webpack-config'
import path from 'path'

const start = (program) => {

  let config = {}
  let getUserWebpackConfig = {}
  if (program && program.opts && program.opts()) {
    config = program.opts().config || {};
    getUserWebpackConfig = require(path.resolve('./', config));
  }
  let webpackConfig = Object.assign({}, defaultWebpackConfig)
  const compiler = Webpack(webpackConfig);
  console.log('defaultWebpackConfig == ', defaultWebpackConfig)
  console.log('getUserWebpackConfig == ', getUserWebpackConfig)

  const devServerOptions = { ...webpackConfig.devServer };
  const server = new WebpackDevServer(devServerOptions, compiler);

  server.startCallback(() => {
    console.log("Starting server on http://localhost:8080");
  });

}
export default start