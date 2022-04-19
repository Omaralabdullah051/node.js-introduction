const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output2.txt`);

// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// })

//here everytime we need to register a listerner to listen the data event to write the file.
//we can do it in a simple way using pipe method without listen the data event.

ourReadStream.pipe(ourWriteStream);