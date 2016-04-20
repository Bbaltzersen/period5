var messages = [];
var users = [];

module.exports = function(socket) {

  function broadcast(type, payload) {
    socket.broadcast.emit(type, payload);
    socket.emit(type, payload);
  }

  socket.on('message', function(message){
    messages.push(message);
    broadcast('message', messages);

  });

  socket.on('login', function(userLogIn){
    users.push(userLogIn);
    broadcast('logIn', users);

  });

};