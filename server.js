const http = require('http');
const app = require('./app'); // import app.js 
const port = process.env.PORT || 3000;
const server = http.createServer(app); //criação do servidor
server.listen(port);
