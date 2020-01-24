const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'wc-nixie': './src/wc-nixie.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js']
  }
};
