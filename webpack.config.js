/* global __dirname */ 		// eslint global declaration 

const path = require('path');
require("@babel/plugin-transform-runtime");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MARZIPANO_VERSION = require('./package.json').version;


module.exports = function (env) { // eslint-disable-line no-unused-vars

	const config = {
		// ENTRY & OUTPUT
		name: 'Marzipano',
		entry: {
			Marzipano: './src/index.js',
		},
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'marzipano.js',
			library: 'Marzipano',
			libraryTarget: 'global'
		},

		// DEVELOPMENT
		devServer: {
			overlay: true,
			contentBase: path.join(__dirname, '..'),
			port: 6294,
			// publicPath: '/sizzle/app/', 
			writeToDisk: true,
			compress: true,
			// proxy: {
			// 	'/api': 'http://localhost:3000',
			// },
			// useLocalIp: true,
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
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								modules: 'commonjs',
								useBuiltIns: 'usage',
								corejs: 3,
								targets: {
									browsers: [
										'>0.5%',
										'not dead',
									],
								},
								// debug: true,
							}]
						],
						plugins: [
							["@babel/plugin-transform-runtime", {
								// corejs: false,
								// helpers: true,
								// regenerator: true,
								// useESModules: true
							}],
						]
					}
				}
			}]
		}
	};

	return config;
};