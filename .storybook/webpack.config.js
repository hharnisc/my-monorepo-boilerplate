const webpack = require('webpack')

module.exports = {
  // define a global static string called __PACKAGES__
  plugins: [new webpack.DefinePlugin({
    __PACKAGES__: JSON.stringify(`../packages/${process.env.PACKAGE || ''}`)
  })]
}
