//module stytem
//import
//we have to use require to import external files/library

// require from our js file
const people = require('./people');//here .js is set by default.
// require from third party library(need to install)
const _ = require('lodash');
//require from node core built in module(don't need to install)
const http = require('http');

console.log(_.last(people.people));

console.log(people.people);
console.log(people.a);
people.test();

console.log(__dirname);
console.log(__filename);


