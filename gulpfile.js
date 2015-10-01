var gulp = require('gulp'),
    path = require('path'),
    gulpWebpack = require('gulp-webpack'),
    process = require('process'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    livereload = require('gulp-livereload'),
    webpackDevServer = require("webpack-dev-server"),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    webpack = require('webpack'),
    uglify = require('gulp-uglify'),
    argv = require('yargs').argv,
    merge = require('merge-stream');

var dst = './dist/';
var uglifyOpts = {
    mangle: false
};
var webpackOpts = {
    watch: false,
    entry: {
        app: './src/js/app'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: 'http://localhost:8080/static/dist/'
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: "app",
        //    // minChunks: 2,
        //    async: true
        //}),
        new webpack.optimize.DedupePlugin()
    ],
    resolve: {
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'vendor',
            'jsx'
        ],
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        $: 'jQuery',
        jQuery: 'jQuery'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'react-hot',
                exclude: /node_modules/
            }, {
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                    stage: 0
                },
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    stage: 0
                },
                exclude: /node_modules/
            }
        ]
    }
};

gulp.task("js", function () {
    var webpackStream = gulp.src('./src/js/app.jsx')
        .pipe(gulpWebpack(webpackOpts));

    var appStream = gulp.src('./src/js/main.js');

    return merge(appStream, webpackStream)
        .pipe(concat('bundle.js'))
        .pipe(gulpif(argv.release, uglify(uglifyOpts)))
        .pipe(gulp.dest(dst))
        .pipe(gulpif(process.argv.indexOf('watch') != -1, livereload()));
});

gulp.task('css', function () {
    return gulp.src('./src/scss/screen.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(dst));
});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch(['./src/js/app.js', './src/js/main.js'], ['js']);
    gulp.watch('./src/scss/screen.scss', ['css']);
});

gulp.task('default', function () {
    return gulp.start('js', 'css');
});