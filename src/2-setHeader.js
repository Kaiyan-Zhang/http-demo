const server = require("http").createServer()

server.on('request', (req, res) => {
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({data: 'hello, world!'}))
})

server.listen(require('../config').port);
