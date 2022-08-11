const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack'); // allows to access environment variables via process.env

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const devMode = mode === 'development';

  const getPlugins = () => {
    const plugins = [
      // allows creating default index.html or use owm template, generates also file in output folder during build
      new HtmlWebpackPlugin({
        title: 'Setup environment',
        // use own template instead of default
        template: path.resolve(__dirname, './src/index.html'),
        // set filename in the output directory (build)
        filename: 'index.html', // index.html by default
      }),

      // allows to access environment variables from .env via process.env
      new Dotenv(),
    ];

    if (!devMode) {
      // extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
      plugins.push(
        new MiniCssExtractPlugin({
          filename: `css/[name].[fullhash:8].css`,
        })
      );
    }

    return plugins;
  };

  return {
    mode,
    devtool: devMode ? 'source-map' : undefined,

    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `[name].[fullhash:8].js`,
      //clean: true, // clean output folder before re-build

      /*
       This is an important option when using on-demand-loading or loading external resources like images, files, etc. If an incorrect value is specified you'll receive 404 errors while loading these resources.
       This option specifies the public URL of the output directory when referenced in a browser.
      */
      //publicPath: "/"
    },

    devServer: {
      // This option allows configuring options for serving static files from the directory ('contentBase' in previous versions, deprecated in v.5)
      static: path.join(__dirname, 'public'),
      open: true,
      hot: false,

      client: {
        reconnect: 3, // tells dev-server the number of times it should try to reconnect the client. By default - unlimited.
      },
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' },
        },
        {
          test: /\.css$/,
          use: [
            // style-loader inject CSS into the DOM (use in development); MiniCssExtractPlugin.loader is used in production to extract styles to css files.
            { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
          ],
        },
      ],
    },

    resolve: {
      alias: {
        core: path.resolve(__dirname, 'src/core'),
        components: path.resolve(__dirname, 'src/components'),
        styles: path.resolve(__dirname, 'src/styles'),
        utils: path.resolve(__dirname, 'src/utils'),
        assets: path.resolve(__dirname, 'src/assets'),
      },
    },

    plugins: getPlugins(),
  };
};
