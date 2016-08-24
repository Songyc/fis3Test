// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

// fis.match('*', {
//   useHash: false
// });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });

fis.match('*.{js,css,png}', {
	useHash: true
});

// 所有的 js
fis.match('**.js', {
    //发布到/static/js/xxx目录下
    release : '/static/js$0',
});