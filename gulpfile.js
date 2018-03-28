let gulp = require('gulp');
let jshint = require('gulp-jshint');
let jscs = require('gulp-jscs');

let jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
    return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
        verbose: true
    }))
   .pipe(jscs());
});

gulp.task('inject', () => {
    let wiredep = require('wiredep').stream;
    let inject = require('gulp-inject');
    let injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});
    let injectOptions = {
        ignorePath: '/public'
    };
    let options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});