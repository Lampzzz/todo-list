import { useState } from "react";
import { useDispatchTodo, useTodo } from "./context/TodoContext";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatchTodo();
  const state = useTodo();

  const addTodo = () => {
    if (task.trim() === "") return;

    const nextId =
      state.length > 0 ? Math.max(...state.map((item) => item.id)) + 1 : 1;

    dispatch({
      type: "add_todo",
      id: nextId,
      todo: task,
    });

    setTask("");
  };

  return (
    <div className="flex mb-5 gap-x-2 justify-center">
      <input
        type="text"
        className="bg-customDark outline-0 text-white px-3 py-2 rounded"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={addTodo}
        className={`${
          task !== ""
            ? "bg-violet text-white"
            : "bg-customDark text-gray-500 cursor-default"
        } px-3 py-2 rounded transition-colors duration-300`}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
