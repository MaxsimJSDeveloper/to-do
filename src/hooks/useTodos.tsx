import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { TodosContextType } from "../types/general.types";

export const useTodos = (): TodosContextType => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
