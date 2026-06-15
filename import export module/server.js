import http from 'http';

const port = 3000;
// const locaHost = 'localhost'
const server =http.createServer((req, res)=>{
 res.write('<h1>The server is successfully created</h1>');
    console.log('hello i made server using node js');
const url = req.url;
console.log(url)
    res.end('server is running ');
    

});

server.listen(port, ()=>{
    console.log('the server is listening on port',port);

});


