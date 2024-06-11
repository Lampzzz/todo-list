import { useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";

const App = () => {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(todoReducer, [
    { id: 1, todo: "Home Workout", status: "ongoing" },
    { id: 2, todo: "Watering Plant", status: "done" },
  ]);

  const addTask = () => {
    if (task.trim() === "") return;

    const nextId =
      state.length > 0 ? Math.max(...state.map((item) => item.id)) + 1 : 1;

    dispatch({
      type: "add_task",
      id: nextId,
      todo: task,
    });
    setTask("");
  };

  const handleDeleteAll = () => {
    dispatch({
      type: "delete_all_task",
    });
  };

  return (
    <div className="p-5 bg-lightGray rounded-lg">
      <h1 className="text-white text-2xl font-bold text-center mb-3">
        Todo List
      </h1>
      <div className="flex mb-5 gap-x-2 justify-center">
        <input
          type="text"
          className="bg-customDark outline-0 text-white px-3 py-2 rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className={`${
            task !== ""
              ? "bg-violet text-white"
              : "bg-customDark text-gray-500 cursor-default"
          } px-3 py-2 rounded transition-colors duration-300`}
        >
          Add Task
        </button>
      </div>
      {state.length > 0 && (
        <div className="max-h-32 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-btnGray scrollbar-track-transparent">
          {state.map((task) => (
            <TodoList key={task.id} task={task} dispatch={dispatch} />
          ))}
        </div>
      )}

      {state.length > 1 && (
        <div className="text-center mt-5">
          <button
            onClick={handleDeleteAll}
            className="bg-customDark text-red-600 hover:bg-red-600 hover:text-customDark px-3 py-2 rounded transition-colors duration-300"
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
