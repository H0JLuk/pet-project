export const buildScssLoader = () => ({
  test: /\.s[ac]ss$/,
  use: [
    // 'style-loader', // create style node from js strings
    'style-loader',
    {
      loader: 'css-loader', // translates css into CommonJS
      options: {
        modules: {
          auto: /\.module\.s[ac]ss$/i,
          localIdentName: '[hash:base64:7]',
        },
      },
    },
    'sass-loader',
  ],
});
