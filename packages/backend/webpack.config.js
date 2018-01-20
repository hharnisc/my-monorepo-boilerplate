module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    '../frontend/index.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
