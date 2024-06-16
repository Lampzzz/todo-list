import { createContext, useReducer } from "react";

export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);

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

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add_todo": {
      return [...state, { id: action.id, todo: action.todo }];
    }

    case "isEditing": {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isEditing: !action.isEditing } : todo
      );
    }

    case "edit_todo": {
      return [...state, { id: action.id, todo: action.todo }];
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

const initialTodo = [
  { id: 1, todo: "Home Workout", done: true },
  { id: 2, todo: "Watering Plant", done: false },
];
