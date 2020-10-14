const express = require('express')
const app = express()
const PORT = 3000
const server = app.listen(PORT, () => {
  console.log(`A server is running on port ${PORT}`)
})
const io = require('socket.io')(server)

const CHAT_MESSAGE = 'chat message'
const CONNECTION = 'connection'
const DISCONNECT = 'disconnect'

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on(CONNECTION, (socket) => {
  console.log("[SERVER] A user connected");

  socket.on(CHAT_MESSAGE, (msg) => {
    io.emit(CHAT_MESSAGE, msg);
  });

  socket.on(DISCONNECT, () => {
    console.log("[SERVER] A user disconnected");
  });
});
