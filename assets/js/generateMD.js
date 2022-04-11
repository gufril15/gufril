var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('editor.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync('./asset/editor.html', markdownReadMe);