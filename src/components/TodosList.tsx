import Todo from "./Todo";

interface Todo {
  id: string;
  task: string;
  isDone: boolean;
}

interface TodosListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodosList = ({ todos, toggleTodo, deleteTodo }: TodosListProps) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodosList;
