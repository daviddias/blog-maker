var static = require('node-static');
var blogMaker = require('./../blog_maker.js');

blogMaker({
    inputPath: 'data/posts',
    outputPath: 'public',
    templatePath: 'data/blog.html',
    rssTemplatePath: 'data/rss.xml',
})

var file = new(static.Server)('./public');

require('http').createServer(function (request, response) {
  console.log(request.url)
  request.addListener('end', function () {
    file.serve(request, response);
  })
  request.resume();
}).listen(8080, function() { console.log('Listening on 8080')});
