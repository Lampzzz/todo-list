import Todo from "./Todo";
import { useTodo } from "./context/TodoContext";

const TodoList = () => {
  const state = useTodo();

  return (
    state.length > 0 && (
      <div className="max-h-32 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-btnGray scrollbar-track-transparent">
        {state.map((task) => (
          <Todo key={task.id} task={task} />
        ))}
      </div>
    )
  );
};

export default TodoList;
