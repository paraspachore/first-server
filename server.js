//server creation

const http = require("http");

const port = 8081;

// http methods
// GET  --> Getting details from server
// POST --> Sending data to server
// PUT --> Overwrite / fully update
// DELETE --> delete data from server
// PATCH --> Update very few fields / certain fields

http
    .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/HTML" });
        res.write("<h4>Hello, this is from my first server</h4>");
        res.end();
    })
    .listen(port, () => {
        console.log('My nodeJS server started on port ${port}');
    });

const todoList = ["need to learn", "need to code"];


// http://localhost:8081
// http://localhost:8081/
// http://localhost:8081/home
// http://localhost:8081/abouUS
// http://localhost:8081/contactUS