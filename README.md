# 女娲【Nuwa】

[![NPM Version][npm-image]][[npm-url](https://www.npmjs.com/package/nuwa-boot)]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][github-actions-image]][github-actions-url]
[![Windows Build][appveyor-image]][appveyor-url]
[![Test Codecov][codecov-image]][codecov-url]

尝试打造一款React的微服务前端脚手架
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
## Configuation

### Nuwa-boot  Cli

| Command | Full Command | Description |
| -- | -- | --|
| -c | --config | Start with a nuwa config |


### Nuwa Config API
| Name | Default | Description |
| -- | -- | --|
| Port | 4000 | Webpack dev server port |
