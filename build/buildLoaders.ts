import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const babelLoader: RuleSetRule = {
    test: /\.(jsx?|tsx?)/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        plugins: [['i18next-extract', { locale: ['ru', 'en'], keyAsDefaultValue: true }]],
      },
    },
  };

  // если не юзаем ts - нужен babel-loader
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/,
  };

  const sassLoader: RuleSetRule = {
    test: /\.s[ac]ss$/,
    use: [
      // 'style-loader', // create style node from js strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader', // translates css into CommonJS
        options: {
          modules: {
            auto: /\.module\.s[ac]ss$/i,
            localIdentName: isDev ? '[path][name]_[local]-[hash:base64:5]' : '[hash:base64:7]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [babelLoader, typescriptLoader, fileLoader, svgLoader, sassLoader];
}
