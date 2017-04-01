const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js', // where the bundler starts the bundling process
  output: { // where the bundled JavaScript code is to be saved
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, // js files
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }, // jsx files
    ]
  },
  // add the html webpack instance to shoot all bundled goods to index.html
  plugins: [HtmlWebpackPluginConfig]

}
