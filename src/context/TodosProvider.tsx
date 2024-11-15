import React, { useState, useEffect } from "react";
import { Todo } from "../types/general.types";
import { TodosContext } from "./TodosContext";

interface TodosProviderProps {
  children: React.ReactNode;
}

export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {
  const loadTodosFromLocalStorage = (): Todo[] => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  };

  const [todos, setTodos] = useState<Todo[]>(loadTodosFromLocalStorage);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (newTask: string) => {
    const newTodo: Todo = {
      id: String(todos.length + 1),
      task: newTask,
      isDone: false,
    };
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      return updatedTodos;
    });
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
