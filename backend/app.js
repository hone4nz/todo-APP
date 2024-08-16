const express = require("express");
const app = express();
const { errMiddleware, catchAsyncError } = require("./errMiddleware");
const Todo = require("./todoModel");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.post(
  "/",
  catchAsyncError(async (req, res, next) => {
    if (!req.body.todo) {
      return next(Error("Please provide a valid todo"));
    }
    const todo = await Todo.create(req.body);

    res.status(201).json({ success: true, todo });
  })
);
app.get(
  "/",
  catchAsyncError(async (req, res) => {
    const todo = await Todo.find({});

    res.status(200).json({ success: true, todo });
  })
);
app.put(
  "/:id",
  catchAsyncError(async (req, res, next) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return next(Error("Please check your id"));
    }
    todo.todo = req.body.todo;
    todo.done = req.body.done;
    await todo.save({ validateBeforeSave: false, new: true });
    res.status(200).json({ success: true, todo });
  })
);
app.delete(
  "/:id",
  catchAsyncError(async (req, res, next) => {
    const todo = await Todo.deleteOne({ _id: req.params.id });

    res.status(200).json({ success: true, message: "Deleted" });
  })
);

app.use(errMiddleware);
module.exports = app;
