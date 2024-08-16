import React, { useEffect, useState } from "react";
const createTodo = async (event, data, setTodos) => {
  event.preventDefault();
  const response = await fetch("http://localhost:4000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const todoList = await fetch("http://localhost:4000");
  document.getElementById("add-input").value = "";

  setTodos(await todoList.json());
};

function addTodo({ data, setData, setTodos }) {
  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          createTodo(event, data, setTodos);
        }}
      >
        <div className="addTodo">
          <h1>To Do List</h1>

          <input
            maxLength="50"
            id="add-input"
            type="text"
            name="todo"
            placeholder="Write something..."
            onChange={(e) => {
              setData({ todo: e.target.value });
            }}
            required
          />
        </div>

        <br />
      </form>
    </div>
  );
}

export default addTodo;
