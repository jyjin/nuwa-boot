import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server'
import context from './util/context'
const start = (program) => {

  let opts = program && program.opts && program.opts()
  let hasArgs = false
  if (opts && JSON.stringify(opts) !== '{}') {
    hasArgs = true
  }
  const { initContext } = context
  initContext({ program, hasArgs, env: 'development' })
  const { defaultSetting, webpackConfig } = context
  const compiler = Webpack(webpackConfig);
  // console.log('webpackConfig  == ', webpackConfig)

  const devServerOptions = { ...webpackConfig.devServer };
  const server = new WebpackDevServer(devServerOptions, compiler);

  server.startCallback(() => {
    console.log(`Starting server on http://localhost:${defaultSetting.port}`);
  });

}
export default start