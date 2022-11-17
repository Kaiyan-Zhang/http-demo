const server = require("http").createServer()

server.on('request', (req, res,) => {
	const buffers = []
	req.on('data', (
		chunk //https://nodejs.org/docs/latest-v17.x/api/buffer.html#class-buffer
		) => {
		buffers.push(chunk)
	})
	req.on('end', ()=>{
		let body = Buffer.concat(buffers).toString();
		console.log(body)
	})
	res.end('')
})

server.listen(require('../config').port);
