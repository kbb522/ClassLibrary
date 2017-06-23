var path = require('path')
var webpack = require('webpack')

var LibraryName = 'xuyilib'
var config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: LibraryName + '.js',
    library: LibraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]

  },
  resolve: {
    extension: ['.js', '.css', '.json', 'jsx'],
    root: path.resolve(__dirname, './src')
  }
}
module.exports = config
