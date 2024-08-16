async function updateTodo(id, update, setTodos, isDone) {
  await fetch(`http://localhost:4000/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ todo: update, done: isDone }),
  });
  const data = await fetch("http://localhost:4000");
  setTodos(await data.json());
}

export default updateTodo;
