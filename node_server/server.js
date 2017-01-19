var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');
 
server.listen(8890);
io.on('connection', function (socket) {
 
  console.log("new client connected");
  var redisClient = redis.createClient();

  redisClient.subscribe('message');
  redisClient.on("message", function(channel, message) {
    console.log("new message in queue "+ channel);
    socket.emit(channel, message);
  });

  redisClient.subscribe('messageRead');
  redisClient.on("messageRead", function(channel, message) {
    console.log("message was read");
    socket.emit(channel, message);
  });
 
  socket.on('disconnect', function() {
    redisClient.quit();
  });
 
});