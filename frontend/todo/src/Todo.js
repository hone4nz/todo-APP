import { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React from "react";
import deleteTodos from "./deleteTodos";
import updateTodo from "./updateTodo";
export function Todo({ todo, index, setTodos }) {
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState(todo.todo);
  const [isDone, setIsDone] = useState(todo.done);

  function component(id) {
    if (!isEdit) {
      return (
        <div className="editAndSave">
          <FaEdit
            id="isClicked"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Edit
          </FaEdit>
        </div>
      );
    } else {
      return (
        <div className="editAndSave">
          <FaSave
            className="save"
            onClick={() => {
              updateTodo(id, update, setTodos, isDone);
              setIsEdit(false);
            }}
          >
            Save
          </FaSave>
        </div>
      );
    }
  }
  return (
    <>
      <div className="list-todo-items">
        <input
          type="checkbox"
          name="done"
          className="checkBox"
          checked={isDone}
          onChange={(event) => {
            const checked = event.target.checked;
            setIsDone(checked);
            updateTodo(todo._id, update, setTodos, checked);
          }}
        />

        <div className="todo-input">
          {!isEdit ? (
            <p>{todo.todo}</p>
          ) : (
            <input
              className="update-todo"
              maxLength="50"
              value={update}
              type="text"
              onChange={(e) => setUpdate(e.target.value)}
            />
          )}
        </div>
        {component(todo._id)}
        <div className="delete">
          <MdDelete
            onClick={() => {
              deleteTodos(todo._id, setTodos);
            }}
          >
            delete
          </MdDelete>
        </div>
      </div>
    </>
  );
}
