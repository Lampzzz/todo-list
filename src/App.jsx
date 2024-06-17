import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import DeleteAllTask from "./DeleteAllTask";
import { TodoProvider, useTodo } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <div className="p-5 bg-lightGray rounded-lg">
        <h1 className="text-white text-2xl font-bold text-center mb-3">
          Todo List
        </h1>
        <AddTodo />
        <TodoList />
        <DeleteAllTask />
      </div>
    </TodoProvider>
  );
};

export default App;
