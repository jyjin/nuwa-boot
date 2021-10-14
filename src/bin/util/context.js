
import generatorWebpackConfig from "../config/generator-webpack-config";
import getNuwaConfig from "../config/get-nuwa-config";
const defaultSetting = {
  root: process.cwd()
}


const initContext = (options) => {


  let config = {}
  let getUserWebpackConfig = {}
  if (options.hasArgs) {
    config = options.program.opts().config || {};
    getUserWebpackConfig = require(path.resolve('./', config));
  }

  generatorWebpackConfig();

  let context = {
    ...defaultSetting,
    ...options,
  }
  Object.assign(exports, context);
}

exports.initContext = initContext