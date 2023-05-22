import "./todoInput.style.css";

const TodoInput = () => {

    const onChangeHandler = (e) => {
        console.log(e.target.value)
    }

    const onClickHandler = (e) => {
        console.log("button is clicked")
    }

    return (
      <div>
        <input type="text" onChange={onChangeHandler} />
        <button onClick={onClickHandler}>Add</button>
      </div>
    );
}

export default TodoInput;