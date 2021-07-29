const http = require('http');

/*const server = http.createServer((req, res) => {
  //res.write();
  res.end('<h1>Hello</h1>');
});
*/

/*if i don't provide the res.end(), then the page will keep loading
res.end() is a must for the response to reach the end
without using res.write(code), i can directly use res.end(code)
*/

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('<h1>This is base URL</h1>');
  } else if (req.url == '/home') {
    res.end('<h1>This is HomePage</h1>');
  } else {
    res.end("<h1>This page doesn't exist</h1><br><a href = '/'>Go To BASE</a>");
  }
});

module.exports = { server };
