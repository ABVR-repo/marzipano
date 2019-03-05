/* global __dirname */ 		// eslint global declaration 

const path = require('path');
require("@babel/polyfill");
require("@babel/plugin-transform-runtime");
// const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env)  {

	const config = {
		devServer: {
			overlay: true,
			contentBase: path.join(__dirname, '..'),
			port: 6294,
			// publicPath: '/assets/', // this will serve all our bundled assets from localhost/assets/ instead of localhost/
			useLocalIp: true,
			writeToDisk: true,
		},
		devtool: 'source-map',
		mode: 'development',
		// mode: 'production',

		entry: {
			marzipano: './src/index.js',
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			library: '[name]',
			libraryTarget: 'global'
		},
		// externals: { // for production, we should make sure this is external, since we'll load it on the top level index page
		// 	jquery: 'jQuery'
		// },
		plugins: [
			new CleanWebpackPlugin(),
		],

		module: {
			rules : [{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/env', {
									modules: 'false',
									useBuiltIns: 'entry',
									targets: ['> 5%']
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

	// if (env && env.browser) {
	// 	config.plugins.push(new BrowserSyncPlugin({
	// 		server: {baseDir: '.'},
	// 		files: ['./krpano-common/*', './krpano-common/**/*', './sizzle/dist/*', './sizzle/src/*.html'],
	// 		ghostMode: true,
	// 		open: false,
	// 		browser: "google chrome",
	// 		reloadOnRestart: true,
	// 		reloadDelay: 50,
	// 		reloadDebounce: 250,
	// 		reloadThrottle: 2000,
	// 		startPath: '/sizzle/src/index-creation.html',
	// 		minify: false,
	// 		port: 6294,
	// 		ui: {port: 6295},
	// 	}));
	// }

	return config;
};