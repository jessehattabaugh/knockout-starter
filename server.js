var static = require('node-static');

var fileServer = new static.Server('www', { cache: 0 });

var PORT = process.env.PORT || "3000";

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    console.log("HTTP server started on port " + PORT);
    fileServer.serve(request, response);
  }).resume();
}).listen(PORT);

console.log("HTTP server started on port " + PORT);
