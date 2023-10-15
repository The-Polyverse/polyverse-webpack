import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: {
    index: './src/index.tsx',
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [/node_modules/],
      },
    ],
  },
};

export default config;
