import { useContext } from "react";
import { TodoContext, TodoDispatchContext } from "../context/TodoContext";

export const useTodo = () => {
  return useContext(TodoContext);
};

export const useDispatchTodo = () => {
  return useContext(TodoDispatchContext);
};
