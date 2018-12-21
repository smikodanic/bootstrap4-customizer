const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // remove folders: https://github.com/johnagan/clean-webpack-plugin


// webpack externals
const fs = require('fs');
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });



module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    // poll: 1000,
    ignored: /node_modules/
  },
  entry: {
      // multiple entry points can be added
      'bundle.bootstrap': './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Create css file (https://github.com/webpack-contrib/file-loader)
            loader: 'file-loader',
            options: {
              // name: 'css/[name].bootstrap.css',
              name: 'css/custom.bootstrap.css'
            }
          },
          {
            // Webpack loader to extract HTML and CSS from the bundle (https://github.com/peerigon/extract-loader)
            loader: 'extract-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them (https://github.com/webpack-contrib/css-loader)
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS (https://github.com/postcss/postcss-loader)
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
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist'])
  ],
  devServer: {
    // host: '192.168.1.253',
    host: '127.0.0.1',
    // host: '5.189.161.70',
    port: 9966,
    contentBase: path.join(__dirname, ''),
    watchContentBase: true, // enable live reload in folder defined by contentBase
    publicPath: '/dist/', // in-memory virtual folder
    open: true,
    compress: true,
    inline: true,
    hot: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 1300, // default 300
      poll: false,
      ignored: ['src/**/*.js', 'node_modules']
    }
  }
};
