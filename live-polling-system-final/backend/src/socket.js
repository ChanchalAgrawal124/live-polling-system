const pollStore = require("./pollStore");

function socketHandler(io) {
  io.on("connection", (socket) => {
    socket.on("createPoll", (pollData) => {
      pollStore.createPoll(pollData);
      io.emit("newPoll", pollData);
    });

    socket.on("submitAnswer", ({ name, option }) => {
      pollStore.submitAnswer(name, option);
      io.emit("pollResult", pollStore.getResults());
    });
  });
}

module.exports = socketHandler;