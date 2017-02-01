var path	= require('path');
var fs		= require('fs');
var less	= require('less');

var LESS_REGEX = /.less$/i;

fs.readdir(path.join(__dirname, '..', 'src'), {encoding: 'utf-8'}, function(err, files) {
	if (err) throw err;

	files.forEach(function(file) {
		if (LESS_REGEX.test(file)) {
			// Read in the file,
			// Compile from less
			// Output the file
			console.log(file);
		}
	});
});
