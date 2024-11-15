import React, { createContext, useState } from "react";
import { Todo, TodosContextType } from "../types/general.types";

export const TodosContext = createContext<TodosContextType | undefined>(
  undefined
);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", task: "Learn JS", isDone: false },
    { id: "2", task: "Learn React", isDone: true },
    { id: "3", task: "Learn Node.js", isDone: false },
  ]);

  const addTodo = (newTask: string) => {
    const newTodo: Todo = {
      id: String(todos.length + 1),
      task: newTask,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
};
