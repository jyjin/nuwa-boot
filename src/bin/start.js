import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './make-webpack/config/generator-webpack-config'

const start = () => {

  // webpackConfig.entry.unshift('webpack-dev-server/client?/', 'webpack/hot/dev-server');
  const compiler = Webpack(webpackConfig);
  const devServerOptions = { ...webpackConfig.devServer };
  const server = new WebpackDevServer(devServerOptions, compiler);

  server.startCallback(() => {
    console.log("Starting server on http://localhost:8080");
  });

}
export default start