interface Todos {
  id: string;
  task: string;
  isDone: boolean;
}

interface TodosListProps {
  todos: Todos[];
}

const TodosList = ({ todos }: TodosListProps) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.task}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodosList;
