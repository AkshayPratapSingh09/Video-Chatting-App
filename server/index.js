const bodyParser = require('body-parser');
const {Server} = require('socket.io');
const express = require('express');
const FS = require('fs');
const react = require('react');

const io = new Server();
const app = express();

app.use(bodyParser.json());

io.on('connection', (socket) =>{});

app.listenerCount(8000, () => console.log('http server running at PORT 8000'));
io.listen(8001);
const bodyParser = require('body-parser');
const express = require('express');
const {Server} = require('socket.io');

const io = new Server();
const app = express();

app.use(bodyParser.json());

io.on('connection', (socket) =>{});

app.listenerCount(8000, () => console.log('http server running at PORT 8000'));
io.listen(8001);

const react = require("react");
const react = require("react");
const react = require("react");
