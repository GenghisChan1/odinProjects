const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/main.js'),
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
  },
  devtool: 'source-map',
  devServer:{
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  module:{
    rule:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader: 'babel-loader',
          option: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test:/\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator:{
          filename: 'images/[name][ext]',
        }
      }

    ],
  },
  plugins:[
    new htmlwebpackplugin({
      title: 'Restaurant',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ]
} 