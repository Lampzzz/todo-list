import IconButton from "./IconButton";
import { FaRegTrashAlt, FaRegEdit, FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiSaveDown2 } from "react-icons/ci";
import { useState } from "react";

const TodoList = ({ task, dispatch }) => {
  const [editText, setEditText] = useState(task.todo);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch({
      type: "delete_task",
      id: task.id,
    });
  };

  const handleStatus = (status) => {
    const newStatus = status === "done" ? "ongoing" : "done";

    dispatch({
      type: "change_status",
      id: task.id,
      status: newStatus,
    });
  };

  return (
    <div className="flex items-center justify-between px-3 py-2 gap-x-2 bg-customDark rounded mb-2">
      <p
        className={` ${
          task.status == "done" ? "line-through text-gray-500" : "text-white"
        }`}
      >
        {task.todo}
      </p>
      <div className="flex gap-x-2">
        <button onClick={handleDelete}>
          <IconButton icon={<FaRegTrashAlt size={15} color="red" />} />
        </button>
        <button onClick={() => handleStatus(task.status)}>
          {task.status === "done" ? (
            <IconButton icon={<RxCross2 color="yellow" />} />
          ) : (
            <IconButton icon={<FaCheck color="blue" />} />
          )}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
