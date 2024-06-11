export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add_task": {
      return [...state, { id: action.id, todo: action.todo }];
    }

    case "isEditing": {
      return state.map((task) =>
        task.id === action.id ? { ...task, isEditing: !action.isEditing } : task
      );
    }

    case "edit_task": {
      return [...state, { id: action.id, todo: action.todo }];
    }

    case "delete_task": {
      return state.filter((task) => task.id != action.id);
    }

    case "delete_all_task": {
      return [];
    }

    case "change_status": {
      return state.map((task) =>
        task.id === action.id ? { ...task, status: action.status } : task
      );
    }

    default: {
      return state;
    }
  }
};
