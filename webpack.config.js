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
	plugins.push(new Webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}));
	plugins.push(new Webpack.optimize.OccurenceOrderPlugin());
	plugins.push(new Webpack.optimize.DedupePlugin());
}

// Production mode will remove code starting with if(__DEV__)
// eg. console.log
plugins.push(new Webpack.DefinePlugin({
	__PRODUCTION__: prod,
	__DEV__: !prod
}));

const config = {
  entry: {
    bundle: SRC_PATH + '/index'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_PATH,
		publicPath: '',
    filename: '/[name]-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: { 
          presets: ['es2015','react', 'stage-0'] 
        },
        include: SRC_PATH
      }
    ]
  },
	devServer: {
	  historyApiFallback: true
	},
	plugins: plugins
};

module.exports = config;