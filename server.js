var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/chat';
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var ObjectId = require('mongodb').ObjectID;

users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('server running...');

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

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
  MongoClient.connect(url, function(err, db) {
    if(err) { return console.dir(err); }

    var armoryCollection = db.collection('armory messages');
    var crceSoccerCollection = db.collection('crce soccer messages');
    var crceBasketballCollection = db.collection('crce basketball messages');
    var crceMphCollection = db.collection('crce mph messages');
    var crceSquashCollection = db.collection('crce squash messages');
    var crceAthleticCollection = db.collection('crce athletics messages');
    var crceVolleyballCollection = db.collection('crce volleyball messages');
    var crceTTCollection = db.collection('crce TT messages');
    var arcSoccerCollection = db.collection('arc soccer messages');
    var arcBasketballCollection = db.collection('arc basketball messages');
    var arcMphCollection = db.collection('arc mph messages');
    var arcSquashCollection = db.collection('arc squash messages');
    var arcAthleticCollection = db.collection('arc athletics messages');
    var arcVolleyballCollection = db.collection('arc volleyball messages');
    var arcTTCollection = db.collection('arc TT messages');
    var arcBadmintonCollection = db.collection('arc badminton messages');


    armoryCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('armory output', res);
    });

    crceSoccerCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('crce soccer output', res);
    });

    crceBasketballCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('crce basketball output', res);
    });

    crceMphCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('crce mph output', res);
    });

    crceSquashCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('crce squash output', res);
    });

    crceAthleticCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('crce athletics output', res);
    });

    crceVolleyballCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('crce volleyball output', res);
    });

    crceTTCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('crce tt output', res);
    });

    arcSoccerCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('arc soccer output', res);
    });

    arcBasketballCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('arc basketball output', res);
    });

    arcMphCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('arc mph output', res);
    });

    arcSquashCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('arc squash output', res);
    });

    arcAthleticCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('arc athletics output', res);
    });

    arcVolleyballCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('arc volleyball output', res);
    });

    arcTTCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('arc tt output', res);
    });

    arcBadmintonCollection.find().limit(100).toArray(function(err, res) {
      if(err) throw err;
      socket.emit('arc badminton output', res);
    });

  });

  //Disconnect
  socket.on('disconnect', function(data) {
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected %s sockets connected', connections.length);
  });

  socket.on('armory', function(data) {
    MongoClient.connect(url, function(err, db) {
      if(err) { return console.dir(err); }

      var collection = db.collection('armory messages');
      var doc1 = {name: data.name, msg: data.msg};

      collection.insert(doc1);
    });
    console.log(data);
    io.sockets.emit('new armory', {name: data.name, msg: data.msg});
  });

  socket.on('crce soccer', function(data) {
    MongoClient.connect(url, function(err, db) {
      if(err) { return console.dir(err); }

      var collection = db.collection('crce soccer messages');
      var doc1 = {name: data.name, msg: data.msg};

      collection.insert(doc1);
      });
    console.log(data);
    io.sockets.emit('new crce soccer', {name: data.name, msg: data.msg});
    });

    socket.on('crce basketball', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('crce basketball messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new crce basketball', {name: data.name, msg: data.msg});
    });

    socket.on('crce squash', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('crce squash messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new crce squash', {name: data.name, msg: data.msg});
    });

    socket.on('crce athletics', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('crce athletics messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new crce athletics', {name: data.name, msg: data.msg});
    });

    socket.on('crce volleyball', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('crce volleyball messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new crce volleyball', {name: data.name, msg: data.msg});
    });

    socket.on('crce tt', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('crce TT messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new crce TT', {name: data.name, msg: data.msg});
    });

    socket.on('crce mph', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('crce mph messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new crce mph', {name: data.name, msg: data.msg});
    });

    socket.on('arc soccer', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('arc soccer messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new arc soccer', {name: data.name, msg: data.msg});
    });

    socket.on('arc basketball', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('arc basketball messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new arc basketball', {name: data.name, msg: data.msg});
    });

    socket.on('arc squash', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('arc squash messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new arc squash', {name: data.name, msg: data.msg});
    });

    socket.on('arc athletics', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('arc athletics messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new arc athletics', {name: data.name, msg: data.msg});
    });

    socket.on('arc volleyball', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('arc volleyball messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new arc volleyball', {name: data.name, msg: data.msg});
    });

    socket.on('arc tt', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('arc TT messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new arc TT', {name: data.name, msg: data.msg});
    });

    socket.on('arc badminton', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('arc badminton messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new arc badminton', {name: data.name, msg: data.msg});
    });

    socket.on('arc mph', function(data) {
      MongoClient.connect(url, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('arc mph messages');
        var doc1 = {name: data.name, msg: data.msg};

        collection.insert(doc1);
        });
      console.log(data);
      io.sockets.emit('new arc mph', {name: data.name, msg: data.msg});
    });


});
