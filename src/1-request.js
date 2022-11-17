//https://nodejs.org/docs/latest-v17.x/api/http.html#event-request

const server = require('http').createServer();

server.on('request', (req, res)=> {
	res.end('hello, world!')
})

server.listen(require('../config').port);
