//Node.js Global objects are those object which are available in any modules. They are console, setImmediate() method, clearImmediate() method, setInterval() method, clearInterval() method, setTimeout() method, clearTimeout() method,etc . We can directly use these modules without importing these modules.

console.log(global);

//In global object, we don't found __dirname,__filename,require,module etc. But we don't need to import these modules. Why ?
//ans: when we write these modules, node.js contain our all codes in a IIFE (Imediately Invoked Function Expression) and pass these modules as a parameter of IFFE. That is why we don't need to import explicitly these modules to use.

