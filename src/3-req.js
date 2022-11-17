const server = require("http").createServer()

// 进阶
// req继承自stream.Readable
// https://nodejs.org/docs/latest-v17.x/api/stream.html#class-streamreadable
// 只能这样处理POST请求

server.on('request', (
	req,  //https://nodejs.org/docs/latest-v17.x/api/http.html#class-httpincomingmessage
	res,
	) => {
	console.log(
		req.url, //https://nodejs.org/docs/latest-v17.x/api/http.html#messageurl
		req.headers, //https://nodejs.org/docs/latest-v17.x/api/http.html#messageheaders
		req.method,  //https://nodejs.org/docs/latest-v17.x/api/http.html#messagemethod
		req.statusCode,  //https://nodejs.org/docs/latest-v17.x/api/http.html#messagestatuscode
		//进阶
		//req.socket, //https://nodejs.org/docs/latest-v17.x/api/http.html#messagesocket
	)
	res.end('')
})

server.listen(require('../config').port);
