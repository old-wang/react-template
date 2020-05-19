const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩工具，不支持es6
// const TerserPlugin = require('terser-webpack-plugin'); // 新压缩工具，支持es6，node>=10.13.0
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 打包分析工具

module.exports = merge(common, {
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin() // 必须放在最后
  ],

  optimization: {
    minimize: true,
    // minimizer: [new TerserPlugin()],
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});