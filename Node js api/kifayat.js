const http = require('http');


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res)=>{
    req.writeHead(200, {'Content-type': "text/plain"});
    res.end('Hello from server');
});


server.listen(port , hostname)