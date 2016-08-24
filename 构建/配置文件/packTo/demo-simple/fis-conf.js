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

fis.set('namespace', 'home');

fis.match('/{*,**/*}.js', {
  	packTo: '/static/pkg_widget.js',
  	release: '/static/${namespace}/pkg/widget.js', 		// fis.set('namespace', 'home')
  	url: '/static/new/${namespace}/pkg/widget.js'
});
