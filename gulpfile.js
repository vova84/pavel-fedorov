// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    path = require('path'),
    embedlr = require("gulp-embedlr"),
    processhtml = require('gulp-processhtml'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

// Styles on build
gulp.task('styles', function() {
    return gulp.src('app/styles/main.css')
        .pipe(gulp.dest('dist/styles'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/styles'));
});

//files
gulp.task('files', function() {
    return gulp.src(['app/*.php', 'app/*.ico', 'app/*.htc', 'app/*.txt'])
        .pipe(gulp.dest('dist'));
});

//modernizr
gulp.task('modernizr', function() {
    return gulp.src('app/scripts/modernizr.js')
        .pipe(gulp.dest('dist/scripts'));
});

// Styles on watch
gulp.task('scss', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({
            includePaths: [
                '/Library/Ruby/Gems/2.0.0/gems/susy-2.2.2/sass'
            ]
        }))
        .pipe(autoprefixer('last 2 version', 'safari >= 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('app/styles'))
        .pipe(livereload());
});


//remove comments and livereload scripts from output html files -  gulp-processhtml
gulp.task('processHTML', function() {
    return gulp.src('./app/*.php')
        .pipe(processhtml())
        .pipe(gulp.dest('./dist/'));
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src(['app/scripts/main.js', 'app/scripts/libs/*.js','app/scripts/modules/*.js', 'app/scripts/*.js', '!./app/scripts/modernizr.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(livereload());
});

// Images
gulp.task('images', function() {
    return gulp.src('app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Html
gulp.task('php', function() {
    return gulp.src("app/**/*.php")
        .pipe(embedlr())
        .pipe(livereload());
});


// Default task
gulp.task('default', ['styles', 'images','scripts','files','modernizr', 'processHTML']);

// Watch
gulp.task('watch', function() {

    livereload.listen();

    // Watch .scss files
    gulp.watch('app/scss/**/*.scss', ['scss']);

    // Watch .js files
    gulp.watch('app/scripts/**/*.js', ['scripts']);

    gulp.watch('app/**/*.php', ['php']);

});


