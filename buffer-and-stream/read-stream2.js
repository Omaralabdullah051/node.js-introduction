const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write('<body><form method="post" action="/process"><input name="message" /></form></body>');
        res.end();
    }
    else if (req.url === '/process' && req.method === "POST") {
        const body = [];
        //here req is a readable stream
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            //when the data streaming is finished the this event will be fired.
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Thank you for submitting');
            res.end();
        })
    }
    else {
        res.write('Page Not Found');
        res.end();
    }
});

server.listen(3000);