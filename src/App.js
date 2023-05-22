import SingleTodo from './components/singleTodo/SingleTodo';
import TodoInput from './components/todoInput/TodoInput';
import "./App.css";
import TodoApp from './containers/todoApp/TodoApp';

function App() {
  return (
    <div className="main-container">
      <TodoApp />
    </div>
  );
}

export default App;
