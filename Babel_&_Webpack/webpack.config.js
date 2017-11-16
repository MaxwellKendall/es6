module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  devServer: {
    host: 'claims01.p2.vbms.va.gov',
    historyApiFallback: true,
    port: 9000,
    hot: true,
  }
  // devServer: {
  //   port: 3000, // most common port
  //   contentBase: './build',
  //   inline: true
  // }
}
