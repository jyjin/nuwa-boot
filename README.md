<h1 align="center">Welcome to Nuwa - 女娲 👋</h1>
<p>
  
  <a href="https://www.npmjs.com/package/nuwa-boot" target="_blank">
    <img alt="Version" src="https://img.shields.io/badge/Version-1.0.0-blue">
  </a>
  <a href="https://www.npmjs.com/package/nuwa-boot" target="_blank">
    <img alt="Version" src="https://img.shields.io/badge/Npm-6.14.12-brightgreen">
  </a>
  <a href="https://www.npmjs.com/package/nuwa-boot" target="_blank">
    <img alt="Version" src="https://img.shields.io/badge/Node-12.22.1-purple">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>


# 🏠 [Homepage](https://github.com/jyjin/nuwa-boot#readme)

A enterprise react micro app bootstrap framework.

尝试打造一款企业级的React轻量前端微服务脚手架


## Requirements

Please ensure your have the environments that like following requirements, to improve your effect when using Nuwa.

  - `node >= 12.22.1`
  - `npm >= 6.14.12`
## Installation

`npm install nuwa-boot -g`

You'd best to install Nuwa in global when developing mode, it is easy to build all your apps including sub apps.

`npm install nuwa-boot --save-dev`

When need to build app for production , to install Nuwa to your local denpendency.

## Usage

Create a `nuwa.config.js` in your project root directory, it can configuature some awesome features when your working.

```
// nuwa.config.js

modules.exports = {
  title: 'First nuwa app',
  port: 4000,
}
```

And then run command `nuwa-root -c ./nuwa.config.js`, the app will start at `http://localhost:4000` by default.
## Configuration

### Nuwa-boot  Cli

| Command | Full Command | Description |
| -- | -- | --|
| -c | --config | Start with a nuwa config |


### Nuwa Config API
| Name | Default | Description |
| -- | -- | --|
| Port | 4000 | Webpack dev server port |





## 👤 Author

   **jyjin 金建业**

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jyjin/nuwa-boot/issues). You can also take a look at the [contributing guide](ssh://git@github.com/jyjin/nuwa-boot/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️  if this project helped you!
