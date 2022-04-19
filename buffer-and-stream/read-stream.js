const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

ourReadStream.on('data', (chunk) => {
    console.log(chunk); //it retuns chunk of data in buffer formate.
})

/////////Buffer:
//pure JS doen't handle binary data very well. It is not problemetic when we perform an operation on data in browser level. But at time of dealing TCP stream and performing a read-write operation on the file system is required to deal with pure binary data. To satisfy this need node.js use Buffer to deal with pure binary data. The Buffer class in node.js is used to perform operations on raw binary data. Buffers only deals with binary data and cannot resizable .Each integer in a buffer represents a byte.


// we can't work on buffer. so we can do this.

const ourReadStream2 = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8');

ourReadStream.on('data', (data) => {
    console.log(data) //here it returns the whole data from bigdata.txt
})

//we have another option to read the data.

const ourReadStream3 = fs.createReadStream(`${__dirname}/bigdata.txt`);

ourReadStream3.on('data', (chunk) => {
    console.log(chunk.toString());
})
