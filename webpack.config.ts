import path from 'path';
import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const client = (env: any, argv: any): Configuration => ({
  name: 'client',
  entry: {
    index: './src/index.tsx',
  },
  target: 'web', // in order to ignore built-in modules like path, fs, etc.
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    client: {
      webSocketURL: {
        pathname: '/ws',
        port: 443,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './dev/index.html',
    }),
  ],
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
  entry: [
    './src/server/index.tsx', 'webpack/hot/poll?1000'
  ],
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  externals: [nodeExternals({ allowlist: ['webpack/hot/poll?1000'] })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
});

export default [client, server];
