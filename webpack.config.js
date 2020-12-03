const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (env) => {
  const isEnvDevelopment = env.development;

  return {
    mode: isEnvDevelopment ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool: isEnvDevelopment ? 'inline-source-map' : false,
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: '>2%' }],
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],
  };
};

module.exports = config;
