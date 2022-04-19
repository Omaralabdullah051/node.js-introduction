const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(__dirname + '/bigdata.txt', 'utf8');//readable stream
    myReadStream.pipe(res); //here res is a writable stream
});

server.listen(3000);