interface AddTodosFormProps {
  addTodo: (task: string) => void;
}

const AddTodosForm = ({ addTodo }: AddTodosFormProps) => {
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = (e.target as HTMLFormElement).todo.value;
    addTodo(newTodo);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form
      className="flex justify-center items-center gap-4 w-full"
      onSubmit={handleAddTodo}
    >
      <input
        className="w-full max-w-md p-3 rounded-lg border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600"
        name="todo"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodosForm;
