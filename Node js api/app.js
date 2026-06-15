// const http = require('http');

// const hostname = 'localhost';
// const PORT = 3000;


// const server = http.createServer((req ,res)=>{
//     req.writeHead(200, {'Content-type': 'text/plain'});
//     res.end('Hello from server');
// });


// server.listen(PORT, hostname, ()=>{
//     console.log('Server is listening port ', PORT);
// });

const http = require('http');

const port = 3000;
const hostname = 'localhost';
const userData = [
{id:1, userName: 'Amir shah'},
{id:2, userName: 'Faiz murad'},
{id:3, userName: 'Khan'}
];


const server = http.createServer((req, res)=>{
    req.setHeader('Content-type', 'application/json');
    res.end('Hello from server');

    const url = req.url;

    if(req.method === 'GET' && url === '/userData'){
        res.statusCode = 200;
        res.end(JSON.stringify(userData));
    }
});

server.listen(port, hostname, ()=>{
    console.log('Server is running on port ', port);
});


