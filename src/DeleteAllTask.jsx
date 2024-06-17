import React from "react";
import { useDispatchTodo, useTodo } from "./context/TodoContext";

const DeleteAllTask = () => {
  const dispatch = useDispatchTodo();
  const state = useTodo();

  const handleDeleteAll = () => {
    dispatch({
      type: "delete_all_todo",
    });
  };

  return (
    state.length > 1 && (
      <div className="text-center mt-5">
        <button
          onClick={handleDeleteAll}
          className="bg-customDark text-red-600 hover:bg-red-600 hover:text-customDark px-3 py-2 rounded transition-colors duration-300"
        >
          Delete All
        </button>
      </div>
    )
  );
};

export default DeleteAllTask;
