const path = require('path');
/* eslint-disable import/no-unresolved */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const srcRoot = path.resolve(__dirname, 'src'); const isDev = env === 'dev';
  const sourceMap = isDev;
  const minimize = !isDev; // we only minimise in production env

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'assets/',
    },

    mode: isDev ? 'development' : 'production',
    devtool: sourceMap ? 'source-map' : false,

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,

            {
              loader: 'css-loader', // 2
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, // 1
            {
              loader: 'css-loader', // 2
              options: {
                sourceMap,
                import: false,
                modules: true,
                camelCase: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            'sass-loader', // 3
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          include: [srcRoot],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:base64:8].[ext]',
              },
            },
            {
              loader: 'img-loader',
              options: {
                enabled: minimize,
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({ filename: 'modules.css' }),
    ],
  };
};
