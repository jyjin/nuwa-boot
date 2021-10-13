import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server'
import defaultWebpackConfig from './make-webpack/config/generator-webpack-config'
import path from 'path'

const start = (program) => {

  let { config } = program.opts();
  let getUserWebpackConfig = require(path.resolve('./', config));
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