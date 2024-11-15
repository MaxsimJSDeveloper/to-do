export interface Todo {
  id: string;
  task: string;
  isDone: boolean;
}

export interface TodosContextType {
  todos: Todo[];
  addTodo: (task: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}
