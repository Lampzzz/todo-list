import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext(null);
const TodoDispatchContext = createContext(null);

const initialTodo = [
  { id: 1, todo: "Home Workout", done: true },
  { id: 2, todo: "Watering Plant", done: false },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add_todo": {
      return [...state, { id: action.id, todo: action.todo, done: false }];
    }

    case "edit_todo": {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, todo: action.todo } : todo
      );
    }

    case "delete_todo": {
      return state.filter((todo) => todo.id != action.id);
    }

    case "delete_all_todo": {
      return [];
    }

    case "change_status": {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, status: action.status } : todo
      );
    }

    default: {
      return state;
    }
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodo);

  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};

export const useDispatchTodo = () => {
  return useContext(TodoDispatchContext);
};
