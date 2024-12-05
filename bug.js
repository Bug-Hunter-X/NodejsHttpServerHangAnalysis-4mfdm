const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: forgetting to call res.end()
  res.write('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});