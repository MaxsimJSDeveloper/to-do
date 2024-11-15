interface Todo {
  id: string;
  task: string;
  isDone: boolean;
}

interface TodoProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const Todo = ({ todo, toggleTodo, deleteTodo }: TodoProps) => {
  const handleChange = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div>
      <h2>{todo.task}</h2>
      <input
        type="checkbox"
        name="done"
        onChange={handleChange}
        checked={todo.isDone}
      ></input>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Todo;
