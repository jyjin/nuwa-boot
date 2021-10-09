import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './make-webpack/config/generator-webpack-config.mjs'
import _ from './util.mjs'

const start = () => {

  const compiler = Webpack(webpackConfig);
  const devServerOptions = { ...webpackConfig.devServer, open: true };
  const server = new WebpackDevServer(devServerOptions, compiler);

  server.startCallback(() => {
    console.log("Starting server on http://localhost:8080");
  });

}
start()
export default start