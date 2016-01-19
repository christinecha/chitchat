var webpack = require('webpack')

module.exports = {
  entry: [
    './public/js/app.js'
  ],
  output: {
    path: './public/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style!css" }
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
