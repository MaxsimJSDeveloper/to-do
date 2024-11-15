import { createContext, useContext } from "react";
import { TodosContextType } from "../types/general.types";

export const TodosContext = createContext<TodosContextType | undefined>(
  undefined
);

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
