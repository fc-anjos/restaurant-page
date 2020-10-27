const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const srcRoot = path.resolve(__dirname, 'src'); const isDev = env === 'dev';
  const sourceMap = isDev;
  const minimize = !isDev; // we only minimise in production env

  return {
    mode: isDev ? 'development' : 'production',

    entry: './src/index.js',

    devtool: sourceMap ? 'source-map' : false,

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
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
                localIdentName: isDev ? '[local]' : '[sha1:hash:hex:4]',
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
