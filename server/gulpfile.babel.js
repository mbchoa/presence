import fs from 'fs-extra';
import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('build', ['clean', 'babel']);

gulp.task('clean', done => {
    fs.remove('build/', done);
});

gulp.task('babel', ()=> {
    console.log('transpiling server js', );
    return gulp.src('server.js', { base: '.' })
        .pipe(babel())
        .pipe(gulp.dest('build/'));
});
