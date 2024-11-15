import { IoMdClose } from "react-icons/io";
import { Todo } from "../types/general.types";
import { useTodos } from "../hooks/useTodos";

interface TodoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoProps) => {
  const { toggleTodo, deleteTodo } = useTodos();

  const handleChange = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name="done"
          onChange={handleChange}
          checked={todo.isDone}
          className="h-5 w-5"
        />
        <h2
          className={`text-lg ${
            todo.isDone ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.task}
        </h2>
      </div>
      <button
        onClick={handleDelete}
        className="text-white p-2 bg-red-600 rounded-full hover:bg-red-700 focus:outline-none"
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default TodoItem;
