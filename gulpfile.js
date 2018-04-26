var gulp = require("gulp");
var watch = require('gulp-watch');

gulp.task('default', function(){
	console.log('success');
})

gulp.task('html', function(){
	console.log('useful being done to html');
})

gulp.task('styles', function(){
	console.log('cool running');
})




gulp.task('watch', function(){
	


	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles.css', function(){
		gulp.start('styles');
	});

});

