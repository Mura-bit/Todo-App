import React, { useState } from "react";
import SingleTodo from "../../singleTodo/SingleTodo";
import TodoInput from "../../components/todoInput/TodoInput";
import "./todoApp.style.css";
import { FizzBuzz } from "./fizzBuzz";


const defaultTodoList = ["Practice please", "Sleep well", "Practice please"];

const TodoApp = () => {
    const [todoList, setTodoList] = useState(defaultTodoList);
    
  // const renderTodos = todoList.map((el, index) => {
  //     <SingleTodo todoText={el} key={index} />
  //   })
  
    return (
      <div className="todo-container">
        <div className="todo-box">
          <h1>Todo App</h1>
          <TodoInput />
          <div className="todo-list">
                    <h1>Your Todos: </h1>
                    {todoList.map((el, index) => {
                        return <SingleTodo todoText={el} key={index} />
                    })}
          </div>
        </div>
        <FizzBuzz />
      </div>
    );
};

export default TodoApp;



