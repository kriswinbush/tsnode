const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  entry: ['babel-polyfill','./src/index.ts'],
  output: {
    filename: './dist/server.js',
    path: path.resolve(__dirname)
  },
  resolve: {
    extensions: ['.ts','.tsx','.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
      },
      {
        test: /\.tsx?$/,
        loader: ['babel-loader','ts-loader'],
        include: [
          path.resolve(__dirname,'src')
        ],
        exclude: [
          path.resolve(__dirname,'./node_modules')
        ]
      }
    ]
  }
}
