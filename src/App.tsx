import { useState } from "react";
import AddTodosForm from "./components/AddTodosForm";
import TodosList from "./components/TodosList";

interface Todos {
  id: string;
  task: string;
  isDone: boolean;
}

const initialTodos: Todos[] = [
  { id: "1", task: "Apple", isDone: false },
  { id: "2", task: "Banana", isDone: true },
  { id: "3", task: "Cherry", isDone: false },
];

function App() {
  const [todos, setTodos] = useState<Todos[]>(initialTodos);

  const addTodo = (newTask: string) => {
    const newTodo: Todos = {
      id: String(todos.length + 1),
      task: newTask,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <AddTodosForm addTodo={addTodo} />
        <TodosList todos={todos} />
      </div>
    </>
  );
}

export default App;
