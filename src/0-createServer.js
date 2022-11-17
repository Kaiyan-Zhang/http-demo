//https://nodejs.org/docs/latest-v17.x/api/http.html#httpcreateserveroptions-requestlistener

require("http").createServer((req, res) => {
   res.end('hello, world!')
}).listen(require('../config').port);
