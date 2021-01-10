const express = require("express");
require("dotenv").config();
const cors = require("cors");
const http = require('http');
const app = express();
const socketio = require('socket.io');
const server = http.createServer(app);
const path = require('path'); 

// We adde cors.origin because cors work with express not socket.io so to solve this proplem we write this commmand
const io = socketio(server, {
  cors: {
    origin: '*',
  }
});

app.use(express.static(path.join(__dirname, 'client/build')));

const mainRouter = require("./routes/main-route");
const db = require("./db");

app.use(cors());
app.use(express.json());
app.use(mainRouter);

app.get('/test', (req, res) => {
  res.json('Hello World Server');
});


io.on("connection", (socket) => {
  const { insID, stuId } = socket.handshake.query;
  // Join a conversation 
  socket.join(insID);
  // Listen for new messages from client
  socket.on('newMessage', (messageData) => {
    io.in(insID).emit('newMessage', messageData);
  });
  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    socket.leave(insID);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
