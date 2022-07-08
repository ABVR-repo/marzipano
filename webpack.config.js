/* global __dirname */ 		// eslint global declaration 

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MARZIPANO_VERSION = require('./package.json').version;


module.exports = env => { // eslint-disable-line no-unused-vars

	const babelLoaderOptions = {
		sourceType: 'unambiguous', // https://github.com/babel/babel/issues/12731#issuecomment-780184014
		presets: [
			['@babel/preset-env', { // https://babeljs.io/docs/en/babel-preset-env
				modules: 'auto',
				useBuiltIns: 'usage',
				corejs: '3.23',
				bugfixes: true,
				shippedProposals: true,
				targets: {
					electron: '19.0.8',
					browsers: [
						'defaults', // base doesn't include enough...
						'not IE 11', // already in defaults, but want to call it out explicitly
						'chrome 64', // from analytics
						'safari 13', // from analytics
						'edge 88', // from analytics
						'firefox 78', // from analytics
						// 'chrome 98', // just for testing, to see latest
					],
				},
				// debug: true,
			}]
		],
		plugins: [
			// ['@babel/plugin-transform-runtime'] // don't use this plugin, the preset-env takes care of everything
		]
	};

	const config = {
		// ENTRY & OUTPUT
		name: 'Marzipano',
		entry: {
			Marzipano: './src/index.js',
		},
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'marzipano.js',
			library: {
				name: 'Marzipano',
				type: 'global',
			}
		},

		// DEVELOPMENT
		devServer: {
			port: 6294,
			compress: true,
			client: {
				overlay: true,
			},
			static: {
				directory: path.join(__dirname, '..'),
				watch: true,
			},
			devMiddleware: {
				writeToDisk: true,
			},
		},
		devtool: 'source-map',
		// mode: 'development',
		mode: 'production',

		// PLUGINS
		plugins: [
			new CleanWebpackPlugin(),
			new webpack.DefinePlugin({
				'process.env.MARZIPANO_VERSION': JSON.stringify(MARZIPANO_VERSION),
			}),
		],

		// MODULES
		module: {
			rules: [{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: babelLoaderOptions,
				},
			}]
		}
	};

	return config;
};