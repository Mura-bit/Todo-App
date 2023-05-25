import "./singleTodo.style.css";

const SingleTodo = (props) => {
    return (
      <div className="container">
        <p>{props.todoText}</p>
        <button>Delete</button>
      </div>
    );
}

export default SingleTodo;