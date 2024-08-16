const mongoose = require("mongoose");
const { Schema } = mongoose;
const todoSchema = new Schema({
  todo: { type: String, required: true },
  createdAt: {
    type: String,
    required: true,
    default: function () {
      const now = new Date();
      return now.toLocaleString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    },
  },
  done: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const todoModel = mongoose.model("TODO", todoSchema);
module.exports = todoModel;
