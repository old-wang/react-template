const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',

  devServer:{
    host: '127.0.0.1',
    port: '2020',
    open: true, // 自动打开浏览器
    hot: true // 现在webpack-dev-server封装了webpack-dev-middle和webpack-dev-middleware，所以我们不需要安装插件，可以直接开启HMR
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(), // hmr插件
    new webpack.NamedModulesPlugin()
  ]
});