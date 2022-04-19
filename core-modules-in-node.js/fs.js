//fs used to handle the file system.

const fs = require('fs');

fs.writeFileSync('myfile.txt', 'Hello programmers');//works synchronusly
fs.appendFileSync('myfile.txt', ' How are you?');
const content = fs.readFileSync('myfile.txt');
console.log(content);//it returns butter which represent binary data in byte.
console.log(content.toString());

//but we need to handle the file system asynchronusly and non-blocking ways majorly.
//if we want to handle it asychronously we need to pass a callback function.
fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
})

fs.appendFile('myfile.txt', ' kmn acho?', (err, data) => { });