const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebPackPlugin({
    inject: true,
    template: path.join(process.cwd(), 'src', 'index.html'),
  }),
];

module.exports = options => ({
  mode: options.mode,
  entry: [
    path.join(process.cwd(), 'src/i18n/init.js'),
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  devServer: options.devServer,
  plugins: options.plugins.concat(plugins),
});
