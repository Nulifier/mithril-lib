var webpack		= require('webpack');
var path		= require('path');

module.exports = function(env) {
	var DEV = (env === 'development');

	return {
		entry: {
			index:	'./src/index',
			select:	'./src/select'
		},
		output: {
			filename: '[name].js',
			library: 'mithrilLib',
			libraryTarget: 'umd',
			pathinfo: DEV
		},
		module: {
			rules: []
		},
		resolve: {

		},
		externals: {
			'mithril': {
				commonjs: 'mithril',
				amd: 'mithril',
				root: 'm'
			}
		},
		devtool: DEV ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
		plugins: DEV ? [

		] : [
			new webpack.optimize.UglifyJsPlugin()
		],
		devServer: {
			contentBase: path.join(__dirname, 'demo'),
			compress: true
		}
	};
};
