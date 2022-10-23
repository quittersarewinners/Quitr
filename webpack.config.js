const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    entry: '/client/index.js',
    mode: env.NODE_ENV,
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          exclude: /(node_modules)/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.png|svg|jpg|gif$/,
          use: ['file-loader'],
        },
      ],
    },
  };
};
