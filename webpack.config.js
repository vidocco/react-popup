var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  target: 'node',
  entry: path.join(__dirname, 'src/react-popup.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // babel-loader doesn't require presets on webpack when babelrc is defined.
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({ // adding UglifyJsPlugin for webpack to improve performance.
      test: /\.js($|\?)/i,
      sourceMap: true,
      uglifyOptions: {
        mangle: {
          reserved: [
            'ReactPopUp', // Reserving ReactPopUp and props to make PropTypes warnings clearer.
            'props',
          ],
        },
        keep_classnames: true,
      },
    }),
  ],
  externals: {
    'react': 'commonjs react',
  },
};