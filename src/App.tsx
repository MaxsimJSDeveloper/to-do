import { useState } from "react";
import AddTodosForm from "./components/AddTodosForm";
import TodosList from "./components/TodosList";

interface Todos {
  id: string;
  task: string;
  isDone: boolean;
}

const initialTodos: Todos[] = [
  { id: "1", task: "Learn JS", isDone: false },
  { id: "2", task: "Learn React", isDone: true },
  { id: "3", task: "Learn Node.js", isDone: false },
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

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 p-4">
      <div className="max-w-5xl w-full flex flex-col gap-8 bg-teal-700 p-8 rounded-xl shadow-xl">
        <AddTodosForm addTodo={addTodo} />
        <TodosList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
