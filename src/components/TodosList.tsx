import { useTodos } from "../context/TodosContext";
import TodoItem from "./Todo";

const TodosList = () => {
  const { todos } = useTodos();

  return (
    <>
      {todos && todos.length > 0 ? (
        <ul className="flex flex-col items-center mt-8 overflow-y-auto overflow-x-hidden max-h-96 w-full custom-scroll">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="w-11/12 flex justify-between items-center bg-teal-500 hover:bg-teal-600 transition-all duration-300 ease-in-out p-5 rounded-lg shadow-xl transform hover:scale-[1.02] mb-4"
            >
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="text-center text-xl font-semibold text-gray-300 mt-12">
          Add your todos here
        </h2>
      )}
    </>
  );
};

export default TodosList;
