const http = require('http');

const server = http.createServer((req, res) => {
  res.write('<h1>Hello</h2>');
  res.end();
});

/* if i don't provide the res.end(), then the page will keep loading
res.end() is a must for the response to reach the end
without using res.write(code), i can directly use res.end(code)
*/
 
module.exports ={server}
