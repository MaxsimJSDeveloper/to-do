import { useState } from "react";
import { useTodos } from "../context/TodosContext";

const AddTodosForm = () => {
  const { addTodo } = useTodos();
  const [newTask, setNewTask] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask) {
      addTodo(newTask);
      setNewTask("");
    }
  };

  return (
    <form
      className="flex justify-center items-center gap-6 w-full"
      onSubmit={handleAddTodo}
    >
      <input
        className="w-full max-w-md p-4 rounded-lg border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all duration-300 ease-in-out"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodosForm;
