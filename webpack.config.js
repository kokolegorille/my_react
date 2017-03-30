// Webpack 2 config

const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Create index.html with correct bundle-[hash] name
// Check that output filename start with / for absolute path
const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.template',
    inject: 'body'
  })
];

// Check if webpack is run through npm run production
const prod = process.argv[4] === '--production';

// Optimization
// https://github.com/webpack/docs/wiki/optimization
if(prod) {
  // production
  // http://dev.topheman.com/make-your-react-production-minified-version-with-webpack/
  plugins.push(new Webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }));

  plugins.push(new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

// Production mode will remove code starting with if(__DEV__)
// eg. console.log
plugins.push(new Webpack.DefinePlugin({
  __PRODUCTION__: prod,
  __DEV__: !prod
}));

module.exports = {
  entry: {
    bundle: SRC_PATH + '/js/index'
  },
  output: {
    path: BUILD_PATH,
    publicPath: '',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: plugins
}
