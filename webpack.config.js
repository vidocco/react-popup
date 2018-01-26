var path = require('path');

module.exports = {
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
        exclude: /(node_modules|bower_components|build)/,
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
        exclude: /(node_modules|bower_components|build)/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  externals: {
    'react': 'commonjs react',
  },
};