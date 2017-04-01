import fs from 'fs-extra';
import gulp from 'gulp';
import babel from 'gulp-babel';

const paths = {
    build: 'build/',
    server: [
        'server.js',
        'config.js'
    ]
};

gulp.task('build', ['clean', 'babel']);

gulp.task('clean', done => {
    fs.remove(paths.build, done);
});

gulp.task('babel', ['clean'], () => {
    console.log('transpiling server js', );
    return gulp.src(paths.server, { base: '.' })
        .pipe(babel())
        .pipe(gulp.dest('build/'));
});
