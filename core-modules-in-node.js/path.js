//path module is used to handle file paths.

const path = require('path');

const myPath = 'C:/Projects/node-js/core-modules-in-node.js/path.js';

console.log(path.basename(myPath)); //it returns the basename of the path(path.js)
console.log(path.dirname(myPath));  //it returns the directory name of the path (C:/Projects/node-js/core-modules-in-node.js)
console.log(path.extname(myPath)); //it returns the extension name of the path (.js)
console.log(path.parse(myPath)); //it returns an object, in object we found root directory, directory name, basename, extensiton name, name of the path.
console.log(path.delimiter);//provides the platform specific path delimiter. (;) fo windows. (:) for POSIX.
console.log(path.format(path.parse(myPath)));// it returns a path string from an object. here we need to pass path object 
console.log(path.isAbsolute(myPath)); //it returns true or false based on the path length.
