//__dirname - path to the current directory
const currentDir = __dirname;
console.log(currentDir);

// __filename - provides with the filename

console.log(__filename);

//require() is a function to import modules
const fs = require('fs');
console.log(fs);

/*module - info about current module
we divide the code into different modules
globalVar.js is a module
3 types of modules in Node:
    Local module: modules we can only access through our environment: utils.js
    Global module: modules that come bundled when we install node.js: fs module, os module,HTTP modules
    3rd party module/package
*/

console.log(module);

//process provide us with an idea about where this module is running
console.log(process);
