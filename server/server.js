const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server);
require('./socket')(io);

const PORT = process.env.PORT || 5000;
const router = require('./router')();

app.use(router);

server.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}.`);
})