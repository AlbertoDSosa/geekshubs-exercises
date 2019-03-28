'use strict';
const config = require('./config');
const api = require('./api');
const http = require('http');

let hostname = config.server.host;
let port = config.server.port;

const server = http.createServer(function (req, res) {
    api(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});