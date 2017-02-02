var path	= require('path');
var fs		= require('fs');
var less	= require('less');

var LESS_REGEX = /.less$/i;

function handleError(err) {
	console.error(err);
	process.exit(1);
}

fs.readdir(path.join(__dirname, '..', 'src'), {encoding: 'utf-8'}, function(err, files) {
	if (err) handleError(err);

	files.forEach(function(file) {
		if (LESS_REGEX.test(file)) {
			// Read in the file,
			fs.readFile(path.join(__dirname, '..', 'src', file), {encoding: 'utf-8'}, function(err, data) {
				if (err) handleError(err);

				// Compile from less
				less.render(data, {
					filename: file
				})
				.then(function(output) {
					// Output the file
					var newPath = path.join(__dirname, '..', path.basename(file, '.less')) + '.css';
					fs.writeFile(newPath, output.css, {encoding: 'utf-8'}, function(err) {
						console.log(file + ' => ' + newPath);
					});
				})
				.catch(handleError);
			});
		}
	});
});
