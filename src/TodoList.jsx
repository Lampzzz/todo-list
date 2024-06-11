import IconButton from "./IconButton";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

const TodoList = ({ task, dispatch }) => {
  const halndleDelete = () => {
    dispatch({
      type: "delete_task",
      id: task.id,
    });
  };

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-customDark rounded mb-2">
      <p className="text-white">{task.todo}</p>
      <div className="flex gap-x-2">
        <button onClick={halndleDelete}>
          <IconButton icon={<FaRegTrashAlt size={15} />} />
        </button>
        <button>
          <IconButton icon={<FaRegEdit />} />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
