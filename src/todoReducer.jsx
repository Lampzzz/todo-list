export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add_task": {
      return [...state, { id: action.id, todo: action.todo }];
    }

    case "edit_task": {
      return [...state, { id: action.id, todo: action.todo }];
    }

    case "delete_task": {
      const newState = state.filter((task) => task.id != action.id);
      return newState;
    }

    case "delete_all_task": {
      return [];
    }
  }
};
