import path from 'path';
import webpack from 'webpack'; // eslint-disable-line
import HtmlWebpackPlugin from 'html-webpack-plugin'; // eslint-disable-line

export default {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'raw-loader',
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
