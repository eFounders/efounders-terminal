import path from 'path';
import webpack from 'webpack'; // eslint-disable-line

export default {
  // devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
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
};
