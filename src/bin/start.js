import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server'
import generatorWebpackConfig from './config/generator-webpack-config'
import path from 'path'
import context from './util/context'
import getNuwaConfig from './config/get-nuwa-config'
const start = (program) => {

  let config = {}
  let getUserWebpackConfig = {}
  let hasArgs = program && program.opts && program.opts()
  if (hasArgs) {
    config = program.opts().config || {};
    getUserWebpackConfig = require(path.resolve('./', config));
  }
  const { initContext } = context
  // initContext({ program, hasArgs, env: 'development' })

  // console.log('context == ', context)

  // const { root } = context
  // console.log('root == ', context)

  let defaultWebpackConfig = generatorWebpackConfig();
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