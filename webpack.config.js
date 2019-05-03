/* global __dirname */ 		// eslint global declaration 

const path = require('path');
require("@babel/polyfill");
require("@babel/plugin-transform-runtime");
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function(env)  { // eslint-disable-line no-unused-vars

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
		],

		// MODULES
		module: {
			rules : [{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/env', {
									modules: 'commonjs',
									useBuiltIns: 'usage',
									targets: {
										browsers: [
											'>0.5%'
										],
									},
									// debug: true,
								}]
							],
							plugins: [
								["@babel/plugin-transform-runtime", {
									// corejs: false,
									// helpers: false,
									// regenerator: true,
									// useESModules: false
								}],
							]
						}
					}
				}
			]
		}
	};

	return config;
};