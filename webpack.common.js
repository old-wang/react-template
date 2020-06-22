const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html摸板
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 样式抽离单独文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 自动清理dist

module.exports = {
  entry: './src/entry/index.js',

  output:{
    filename: '[name].[hash].js',//根据入口名，生成不同的文件，这里示例的入口名是main被省略了，所以生成的是main.js而不是index.js
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"] // 省略后缀
  },

  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },{
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  },

  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html'//模板文件，将根据这个文件生成
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
};