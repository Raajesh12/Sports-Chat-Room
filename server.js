var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('server running...');

app.use(express.static('public/'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/templates/home.html');
});

app.get('/arc.html', function(req, res) {
  res.sendFile(__dirname + '/templates/arc.html');
});

app.get('/crce.html', function(req, res) {
  res.sendFile(__dirname + '/templates/crce.html');
});

app.get('/armory.html', function(req, res) {
  res.sendFile(__dirname + '/templates/armory.html');
});

app.use(express.static('templates'));

io.sockets.on('connection', function(socket) {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  //Disconnect
  socket.on('disconnect', function(data) {
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected %s sockets connected', connections.length);
  });

  socket.on('send message', function(data) {
    console.log(data);
    io.sockets.emit('new message', {name: data.name, msg: data.msg});
  });
});
