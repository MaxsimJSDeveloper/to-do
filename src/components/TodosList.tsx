import { useTodos } from "../hooks/useTodos";
import TodoItem from "./Todo";

const TodosList = () => {
  const { todos } = useTodos();

  return (
    <ul className="flex flex-col gap-4 items-center">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="w-full flex justify-between items-center bg-teal-600 p-4 rounded-lg shadow-md"
        >
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
