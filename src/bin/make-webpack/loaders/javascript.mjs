const javascriptModule = {
  test: /\.(js|jsx|mjs)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};

export default javascriptModule;