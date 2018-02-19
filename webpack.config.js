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
          loader: 'babel-loader',
          options: {
            presets: ['env','es2015', 'stage-0', 'react'],
          },
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
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      uglifyOptions: {
        mangle: {
          reserved: [
            'ReactPopUp',
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