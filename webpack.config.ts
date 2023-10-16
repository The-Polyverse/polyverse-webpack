import path from 'path';
import { Configuration } from 'webpack';

const client = (env: any, argv: any): Configuration => ({
  name: 'client',
  entry: {
    index: './src/index.tsx',
  },
  target: 'web', // in order to ignore built-in modules like path, fs, etc.
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
});

const server: (env: any, argv: any) => Configuration = (env, argv) => ({
  name: 'server',
  entry: {
    index: './src/server/index.tsx',
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
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
});

export default [client, server];
