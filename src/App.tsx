import AddTodosForm from "./components/AddTodosForm";
import TodosList from "./components/TodosList";
import { TodosProvider } from "./context/TodosContext";

function App() {
  return (
    <TodosProvider>
      <div className="flex justify-center items-center h-screen bg-gray-800 p-4">
        <div className="max-w-5xl w-full flex flex-col gap-8 bg-teal-700 p-8 rounded-xl shadow-xl">
          <AddTodosForm />
          <TodosList />
        </div>
      </div>
    </TodosProvider>
  );
}

export default App;
