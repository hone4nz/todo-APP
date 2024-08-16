const deleteTodos = async (id, setTodos) => {
  const response = await fetch(`http://localhost:4000/${id}`, {
    method: "DELETE",
  });

  const updatedTodos = await fetch("http://localhost:4000");
  setTodos(await updatedTodos.json());
};
export default deleteTodos;
