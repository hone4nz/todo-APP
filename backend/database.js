// getting-started.js
const mongoose = require("mongoose");

function connection() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/todo")
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => console.log(err.message));
}
module.exports = connection;
