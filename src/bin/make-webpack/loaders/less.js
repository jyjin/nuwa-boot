const lessModule = {
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

export default lessModule;