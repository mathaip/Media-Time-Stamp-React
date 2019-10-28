try {
    var http = require('http');
    const hostname = 'localhost';
    const port = 3000;
    const server = http.createServer(function(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    });
    server.listen(port, hostname, () => {
        console.log("http://${hostname}:${port}/" + "ok");
    });

} catch (error) {
    console.log(error);
}