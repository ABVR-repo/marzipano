/* global __dirname */ 		// eslint global declaration 

const path = require('path');
require("@babel/polyfill");
require("@babel/plugin-transform-runtime");
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function(env)  { // eslint-disable-line no-unused-vars

	const config = {
		// ENTRY & OUTPUT
		name: 'marzipano',
		entry: {
			marzipano: './src/index.js',
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'marzipano.js',
			library: 'marzipano',
			libraryTarget: 'global'
		},
		
		// DEVELOPMENT
		// devServer: {
		// 	overlay: true,
		// 	contentBase: path.join(__dirname, '..'),
		// 	port: 6294,
		// 	// publicPath: '/assets/', // this will serve all our bundled assets from localhost/assets/ instead of localhost/
		// 	useLocalIp: true,
		// 	writeToDisk: true,
		// },
		devtool: 'source-map',
		mode: 'development',
		// mode: 'production',

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

	// EXTRAS BASED ON ENV
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