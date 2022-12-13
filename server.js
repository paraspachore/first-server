//server creation

const http = require("http");

const port = 8081;

http
    .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/HTML" });
        res.write("<h4>Hello, this is from my first server</h4>");
        res.end();
    })
    .listen(port, () => {
        console.log('My nodeJS server started on port ${port}');
    });

// http://localhost:8081