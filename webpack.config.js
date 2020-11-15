const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // index: 'index.html',
    open: true, // 自动打开浏览器
    compress: true, // 启动gzip压缩
    hot: true,
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://open.duyiedu.com',
        changeOrigin: true, // 更改请求头中的host和origin
      },
    },
  },  
  // stats: {
  //   modules: false,
  //   colors: true,
  // }, // 统计数据，配置控制台输出内容
  entry: {
    app: './src/index.js',
    // print: './src/print.js',
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CopyPlugin({
      patterns: [{ from: 'public/assets', to: 'assets' }],
    }),
  ],
}
