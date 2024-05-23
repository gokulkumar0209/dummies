const http = require("http");
const hostname = "127.0.0.1";
const port = 300;

const server = http.createServer((req, res) => {
	if (req.url == "/") {
		res.statusCode = 200;
		res.setHeader("Content-typr", "text/plain");
		res.end("Sitcoms");
	} else if (req.url == "/sheldon") {
		res.statusCode = 200;
		res.setHeader("Content-typr", "text/plain");
		res.end("Bazinga!!!");
	} else if (req.url == "/joey") {
		res.statusCode = 200;
		res.setHeader("Content-typr", "text/plain");
		res.end("Howudoing!");
	} else {
		res.statusCode = 404;
		res.setHeader("Content-typr", "text/plain");
		res.end("404 Page not found");
	}
});

server.listen(port, hostname, () => {
	console.log("server is listening at http://" + hostname + ":" + port);
});
