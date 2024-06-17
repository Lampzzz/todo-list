import { useState } from "react";
import { FaRegTrashAlt, FaRegEdit, FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiSaveDown2 } from "react-icons/ci";
import IconButton from "./IconButton";
import { useDispatchTodo } from "./context/TodoContext";

const Todo = ({ task }) => {
  const dispatch = useDispatchTodo();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch({ type: "delete_todo", id: task.id });
  };

  const handleStatus = () => {
    dispatch({ type: "change_status", id: task.id, status: !task.status });
  };

  const handleEdit = (e) => {
    dispatch({ type: "edit_todo", id: task.id, todo: e.target.value });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between px-3 py-2 gap-x-2 bg-customDark rounded mb-2">
      <div className="flex items-center gap-x-2">
        <button onClick={handleStatus}>
          <IconButton
            icon={
              task.status ? (
                <RxCross2 color="yellow" />
              ) : (
                <FaCheck color="blue" />
              )
            }
          />
        </button>
        {isEditing ? (
          <input
            type="text"
            value={task.todo}
            onChange={handleEdit}
            className="border-b-2 outline-0 py-1 bg-transparent text-white"
          />
        ) : (
          <p
            className={`${
              task.status ? "line-through text-gray-500" : "text-white"
            }`}
          >
            {task.todo}
          </p>
        )}
      </div>
      <div className="flex gap-x-2">
        <button onClick={toggleEditing}>
          <IconButton
            icon={
              isEditing ? (
                <CiSaveDown2 size={15} color="white" />
              ) : (
                <FaRegEdit size={15} color="green" />
              )
            }
          />
        </button>
        <button onClick={handleDelete}>
          <IconButton icon={<FaRegTrashAlt size={15} color="red" />} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
