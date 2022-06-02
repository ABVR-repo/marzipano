/* global __dirname */ 		// eslint global declaration 

const path = require('path');
require('@babel/plugin-transform-runtime');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MARZIPANO_VERSION = require('./package.json').version;


module.exports = env => { // eslint-disable-line no-unused-vars

	const babelLoaderOptions = {
		presets: [
			['@babel/preset-env', {
				modules: 'commonjs', // this is required otherwise it throws an error when loading the bundle; thinks its an esmodule?
				useBuiltIns: 'usage',
				corejs: { version: '3.21' },
				bugfixes: true,
				shippedProposals: true,
				targets: {
					electron: '8.2.3',
					browsers: [
						'defaults', // base but doesn't include enough...
						'not IE 11', // already in defaults, but want to call it out explicitly
						'chrome 64', // from analytics
						'safari 13', // from analytics
						'edge 88', // from analytics
						'firefox 78', // from analytics
						// 'chrome 98', // testing to see latest
					],
				},
				// debug: true,
			}]
		],
		plugins: [
			['@babel/plugin-transform-runtime', {
				corejs: { version: '3' },
			}],
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
		mode: 'development', 
		// mode: 'production',

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