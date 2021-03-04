const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPluginImport = require('webpack-plugin-import');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// css提取打包成文件引入
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PORT = process.env.PORT;
const mode = process.env.NODE_ENV;

console.log({ PORT, mode });
// 因为你项目里的路由使用了按需加载，所以webpack打包时就生成了对应的chunk文件(就是你说的1，2，3)，而.map文件，是webpack使用了source-map，主要用于调试
module.exports = {
  mode: mode,
  devtool: false,
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.[hash].js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, './src')
        ],
      }, {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'ice-skin-loader',
            options: {
              themeFile: require.resolve('@icedesign/theme/variables.scss'),
            }
          },
        ],
      }, {
        test: /\.(png|svg|xml|json|ico)$/,
        loader: 'url-loader'
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  optimization: {
    splitChunks: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
  
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    
    new WebpackPluginImport([
      {
        libraryName: /^@alifd\/next\/lib\/([^/]+)/,
        stylePath: 'style.js',
      },
      {
        libraryName: /@alifd\/.*/,
        stylePath: 'style.js',
      },
    ]),
  
    new OpenBrowserPlugin({url: `http://localhost:${PORT}`})
  ],
  devServer: {
    contentBase:'./dist',
    
    historyApiFallback:true,
    disableHostCheck:true,
    inline:true,
    hot: true,
    port: PORT,
    host:"0.0.0.0",//如果要让外部访问（手机等）这里需要配置下
  },
};
