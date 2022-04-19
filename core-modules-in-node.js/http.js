//http moudle communicate with the network. We can create server by this.

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Programmers!');
        res.write('How are you!');
        res.end();
    }
    else if (req.url === '/about') {
        res.write('This is about us page');
        res.end();
    }
    else {
        res.write('Page Not Found');
        res.end();
    }
});

server.listen(3000) //here we create the server on 3000 port in our localhost.

//now we can start on the server in the terminal (node core-modules-in-node.js/http.js) .then we can visit (localhost:3000) in the browser on our local machine.

