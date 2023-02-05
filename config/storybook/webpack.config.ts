import path from 'path';
import { Configuration } from 'webpack';

import { BuildPaths } from '../build/types/config';
import { buildScssLoader } from './buildLoaders';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  if (!config.resolve?.modules || !config.resolve.extensions || !config.module?.rules) {
    return config;
  }

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('js', 'jsx', 'ts', 'tsx', 'json');
  config.module.rules.push(buildScssLoader());

  config.module.rules = config.module.rules.map(rule => {
    // fucking webpack typings...
    if (rule !== '...' && /svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.resolve.alias = {
    ...(config.resolve?.alias || {}),
    '@': path.resolve(__dirname, '..', '..', 'src'),
  };

  return config;
};
