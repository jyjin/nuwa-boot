
import path from 'path';
import generatorWebpackConfig from "../config/generator-webpack-config";
import getNuwaConfig from "../config/get-nuwa-config";
const defaultSetting = {
  port: 4000,
  root: process.cwd(),
}

const initContext = (options) => {
  let config
  let getUserWebpackConfig = {}
  if (options.hasArgs) {
    config = options.program.opts().config;
    if (config !== undefined) {
      getUserWebpackConfig = require(path.resolve(defaultSetting.root, './', config))
    }
  } else {
    getUserWebpackConfig = require(path.resolve(defaultSetting.root, './nuwa.config.js'));
  }

  let webpackConfig = generatorWebpackConfig({ ...options, ...defaultSetting, ...getUserWebpackConfig, isSelf: !options.hasArgs })
  // console.log('getUserWebpackConfig == ', getUserWebpackConfig)
  // console.log('defaultWebpackConfig == ', webpackConfig)

  let context = {
    defaultSetting,
    ...options,
    webpackConfig,
  }
  Object.assign(exports, context);
}

exports.initContext = initContext