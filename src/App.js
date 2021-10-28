import { useState } from "react";
import "./styles.css";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = input;
    setTodo([...todos, newTask]);

    setInput("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo, key) => (
        <Todo key={key} tasks={todo} />
      ))}
    </div>
  );
}
