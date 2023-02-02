import path from 'path';

import { BuildEnv, BuildPaths, buildWebpackConfig } from './config/build';

const paths: BuildPaths = {
  build: path.resolve(__dirname, 'dist'),
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv) => {
  const { mode } = env;
  const isDev = mode === 'development';
  const port = +env.PORT || 3000;

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
