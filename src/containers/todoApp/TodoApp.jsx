import SingleTodo from "../../components/singleTodo/SingleTodo";
import TodoInput from "../../components/todoInput/TodoInput";
import "./todoApp.style.css";

const TodoApp = () => {
    return (
      <div className="todo-container">
        <div className="todo-box">
          <h1>Todo App</h1>
          <TodoInput />
          <div className="todo-list">
            <h1>Your Todos: </h1>
            <SingleTodo />
          </div>
        </div>
      </div>
    );
};

export default TodoApp;