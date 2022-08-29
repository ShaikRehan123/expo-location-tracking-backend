const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  io.emit("message", "Hello World");
  socket.on("location", (location) => {
    console.log(location);
    io.emit("location", location);
  });
});

httpServer.listen(3000, () => {
  console.log(`You can access the server at http://localhost:3000`);
});
