const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
});
const port=3000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
