var static = require('node-static');
var blogMaker = require('./../blog_maker.js');

blogMaker('data/posts', 'public','data/blog.html', 'data/rss.xml', 'blog')

var file = new(static.Server)('./public');

require('http').createServer(function (request, response) {
  console.log(request.url)
  request.addListener('end', function () {
    file.serve(request, response);
  })
  request.resume();
}).listen(8080, function() { console.log('Listening on 8080')});