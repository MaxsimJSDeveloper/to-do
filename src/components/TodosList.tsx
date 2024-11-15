import { Todo } from "../types/general.types";
import TodoItem from "./Todo";

interface TodosListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodosList = ({ todos, toggleTodo, deleteTodo }: TodosListProps) => {
  return (
    <ul className="flex flex-col gap-4 items-center">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="w-full flex justify-between items-center bg-teal-600 p-4 rounded-lg shadow-md"
        >
          <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
