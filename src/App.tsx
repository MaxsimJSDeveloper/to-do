import TodosList from "./components/TodosList";

interface Todos {
  id: string;
  task: string;
  isDone: boolean;
}

const todos: Todos[] = [
  { id: "1", task: "Apple", isDone: false },
  { id: "2", task: "Banana", isDone: true },
  { id: "3", task: "Cherry", isDone: false },
];

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <TodosList todos={todos} />
      </div>
    </>
  );
}

export default App;
