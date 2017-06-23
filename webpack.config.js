var path = require('path')
var webpack = require('webpack')
var args = require('yargs').argv

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

var mode = args.mode
var LibraryName = 'xuyilib'
var plugins = []
var fileName = LibraryName+'.js'
if (mode === 'pro') {
  plugins.push(new UglifyJsPlugin({minimize: true}))
  fileName = LibraryName+'.min.js'
} else {

}





var config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: fileName,
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
      },{
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]

  },
  devtool: "source-map",
  resolve: {
    extension: ['.js', '.css', '.json', 'jsx'],
    root: path.resolve(__dirname, './src')
  },
  plugins : plugins
}
module.exports = config
