const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello MAN')
        res.end();
    }
});

server.listen(3000);
console.log('Listening on the server 3000...');