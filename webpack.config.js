const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'index.user.js',
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },
}
