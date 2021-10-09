
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const sassModule = {
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
export default sassModule