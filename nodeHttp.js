var http = require('http');
var calculoIdade = require('./moduloCalc');

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(calculoIdade(2022,2004));
res.end();
}).listen(8080);

/home/integrado/node/27-05/nodeHttp.js