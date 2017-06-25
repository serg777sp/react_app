'use strict';

const webpack = require("webpack");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV || 'development';
const DEVMODE = NODE_ENV === 'development';
const PRODMODE = NODE_ENV === 'production';

module.exports = {
	context: path.resolve(__dirname, 'src', 'scripts'),
	watch: DEVMODE,
	devtool: DEVMODE ? 'cheap-module-inline-source-map' : false,
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	entry: {
		app: './app.jsx'
	},
	output: {
		filename: '[name].bundle.js',
		publicPath: '/js/',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: path.resolve(__dirname, 'src', 'scripts'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react'],
						plugins: ["transform-decorators-legacy", "transform-object-rest-spread"]
					}
				}
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.IgnorePlugin(/\.\/locale/)
	]
};

//uglify
if (PRODMODE) {
	module.exports.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	);
}
