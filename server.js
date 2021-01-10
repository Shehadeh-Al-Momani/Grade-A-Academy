const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const path = require('path');
const socketio = require('socket.io');
const favicon = require("serve-favicon");
const logger = require("morgan");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(favicon(path.join(__dirname, "client/build", "favicon.ico")));

app.get("/*", function (req, res) {
res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
// const server = require('http').createServer(app);

// We adde cors.origin because cors work with express not socket.io so to solve this proplem we write this commmand
const io = socketio(require('http').createServer(app), { cors: { origin: '*' } });

const mainRouter = require("./routes/main-route");
const db = require("./db");

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

app.use(cors());
app.use(express.json());
app.use(mainRouter);

const PORT = process.env.PORT || 5000 || 80;
const HOST = process.env.HOST || '0.0.0.0' || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
