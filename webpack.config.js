var webpack		= require('webpack');

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
		devtool: DEV ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
		plugins: DEV ? [

		] : [
			new webpack.optimize.UglifyJsPlugin()
		],
		devServer: {

		}
	};
};
