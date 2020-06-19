const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = (env) => {
  const isProduction = (env === 'production');

  return [{
    entry: {
      main: './src/client/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/[name].js',
      publicPath: '/'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/client/'),
      }
    },
    mode: env,
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          exclude: file => (
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
          ),
          loader: 'babel-loader'
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                prependData: "@import '@/styles/_variables.scss';"
              }
            }
          ],
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          exclude: [
            path.resolve(__dirname, 'src/client/icons/svg')
          ],
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: 'img/[name].[ext]',
              esModule: false
            }
          }
        },
        {
          test: /\.svg$/,
          include: [
            path.resolve(__dirname, 'src/client/icons/svg')
          ],
          use: [
            {
              loader: 'svg-inline-loader'
            },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  { removeViewBox: false }
                ]
              }
            }
          ]
        }
      ]
    },
    devtool: (isProduction) ? 'source-map' : 'inline-source-map'
  }];
};

module.exports = config;
