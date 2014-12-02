var fs = require('fs');

// this package is broken https://github.com/kangax/html-minifier/issues/295
//var minify = require('html-minifier').minify;

module.exports = function (file) {
  
  // todo: remove newlines from attributes
  //return minify(fs.readFileSync(file, 'utf8'), {minifyCSS: true, customAttrCollapse: 'data-bind'});
  return fs.readFileSync(file, 'utf8');
};