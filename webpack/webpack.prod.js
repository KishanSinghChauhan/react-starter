const webpack = require('webpack')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Kishan'),
    }),
    new BundleAnalyzer(),
  ],
}
