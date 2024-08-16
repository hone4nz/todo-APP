import { Todo } from "./Todo.js";
function Todos({ todos, setTodos }) {
  return (
    <div className="list-todo">
      {todos.todo &&
        todos.todo.map((todo, index) => {
          return (
            <div key={todo._id}>
              <Todo todo={todo} index={index} setTodos={setTodos} />
            </div>
          );
        })}
    </div>
  );
}

export default Todos;
