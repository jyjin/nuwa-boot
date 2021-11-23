import Webpack, { ContextExclusionPlugin } from 'webpack';
import context from './util/context'
const build = (program) => {

  let opts = program && program.opts && program.opts()
  let hasArgs = false
  if (opts && JSON.stringify(opts) !== '{}') {
    hasArgs = true
  }
  const { initContext } = context
  initContext({ program, hasArgs, env: 'production' })
  console.log('build config == ', context.webpackConfig)
  const { webpackConfig } = context
  Webpack(webpackConfig, () => {
    console.log('Build Success!')
  });
}
export default build