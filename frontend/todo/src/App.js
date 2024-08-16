import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import Todos from "./Todos";
function App() {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/");
      if (!response.ok) {
        throw new Error(`resposne status:${response.status}`);
      }
      const data = await response.json();
      setTodos(data);
    };
    fetchData();
  }, []);
  return (
    <div className="borderEffect">
      <div className="main">
        <AddTodo data={data} setData={setData} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
