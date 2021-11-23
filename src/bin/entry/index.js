import fs from 'fs'
// import nunjucks from 'nunjucks'
import path from 'path'

const createEntry = (config) => {

  let entryFile = config.isSelf ? path.resolve(config.root, './lib/app.js')
    : '/Users/jyjin/workspace/gitProject/nuwa-boot/lib/app.js'

  const entry = {
    app: entryFile,
    vendor: ["react", "react-dom"]
  };
  // console.log('config ====== ', config)
  // if (config && config.main) {
  //   entry.app = config.main
  // }

  // const getPackageInfo = {main: './src/index.js'}//require(path.resolve(config.root, './package.json'))
  // let content = fs.readFileSync(path.resolve(config.root, "./lib/app.js")).toString()
  // let layout = fs.readFileSync(path.resolve(config.root, getPackageInfo.main))
  // let fileStr = nunjucks.renderString(content, layout)
  // fs.writeFileSync(fileStr, path.resolve(config.root, './lib/app.js'));

  // entry.app = './lib/app.js'
  return entry
}

export default createEntry;