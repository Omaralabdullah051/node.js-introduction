const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);//redable stream
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);//writeable stream

ourReadStream.on('data', (chunk) => {
    ourWriteStream.write(chunk);
})

//Stream is a way of data-handling that helps us to obtain a sequential output by reading or writing the file,network communications, and any kind of end-to-end information exchange.

//the advantages of Stream: memory efficiency, time efficiency, composable data.

//we can read file by using fs.readFile() & write file by using fs.writeFile() asynchronusly. We also read and write File synchornously by using fs.readFileSync() & fs.writeFileSync.

//But the best way to read & write file via streaming. because the streaming process helps us to obtain a sequential output. We obtain the data part by part (chunk) through data streaming.