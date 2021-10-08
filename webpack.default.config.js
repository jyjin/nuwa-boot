const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

const entry = {
  app: './app.js',
  vendor: ["react", "react-dom"]
};

const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[chunkhash:8].js',
};

const m_less = {
  test: /\.less$/i,
  use: [
    {
      loader: "style-loader",
    },
    {
      loader: "css-loader",
    },
    {
      loader: "less-loader",
      options: {
        lessOptions: {
          strictMath: true,
        },
      },
    },
  ],
};

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const m_sass = {
  test: /\.scss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      // Interprets CSS
      loader: "css-loader",
      options: {
        importLoaders: 2
      }
    },
    {
      loader: 'sass-loader' // 将 Sass 编译成 CSS
    }
  ]
}
const m_file = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
};
const m_svg = {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
};
const m_js = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};

const loaders = {
  rules: [m_less, m_sass, m_file, m_svg, m_js]
}

const plugins = [
  // 分离文件
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: 'index.css',
  }),
];

const devServer = {
  allowedHosts: 'all',
}
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  entry,
  output,
  module: loaders,
  plugins,
  devServer,
  optimization: {
    splitChunks: {},
    minimizer: [
      // 有时候webpack会默认优化z-index值，设置默认不优化
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    ]
  }
};
