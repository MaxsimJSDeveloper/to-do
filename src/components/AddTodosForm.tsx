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
    <>
      <form onSubmit={handleAddTodo}>
        <input name="todo"></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddTodosForm;
