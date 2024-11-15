import AddTodosForm from "./components/AddTodosForm";
import TodosList from "./components/TodosList";
import { TodosProvider } from "./context/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <div className="flex justify-center items-center h-screen bg-gray-800 p-6">
        <div className="max-w-4xl w-full flex flex-col gap-8 bg-teal-700 p-8 rounded-2xl shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-102 mb-4">
          <h1 className="text-4xl font-semibold text-white text-center mb-6">
            Todo List
          </h1>
          <AddTodosForm />
          <TodosList />
        </div>
      </div>
    </TodosProvider>
  );
}

export default App;
