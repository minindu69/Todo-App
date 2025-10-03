import { useState } from "react";
import TodoInput from "../Todo Input/TodoInput";
import TodoItem from "../Todo Item/TodoItem";
import "./TodoList.scss";
// import reactLogo from "../../assets/react.svg";
import ReactLogo from "../../assets/react.svg?react";
import ViteLogo from "../../assets/vite.svg?react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo__list py-10">
      <div className="header text-[4rem] gradient-text font-mono font-bold pb-4 text-center select-none">
        <h1>Todo App</h1>
      </div>

      <div className="todo__input relative">
        <TodoInput todos={todos} setTodos={setTodos}></TodoInput>
      </div>

      <div className="todo_section relative">
        <div className="todo__item flex flex-col items-center justify-center px-0">
          {/* <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem> */}
          {todos.map((todoItem, index) => (
            <TodoItem
              key={todoItem.id}
              index={index + 1}
              todoItem={todoItem}
              todos={todos}
              setTodos={setTodos}
            ></TodoItem>
          ))}
        </div>

        {/* background logos */}
        <div className="todo__background absolute">
          <div className="flex justify-center items-center gap-4">
            {/* <img src={reactLogo} alt="" srcset="" className="react__icon h-6 w-6" /> */}
            <ReactLogo className="h-20 w-20 text-blue-500 animate-slow-spin opacity-20" />
            <h1 className="text-[#aeaeae] text-4xl opacity-20 select-none">
              +
            </h1>
            <ViteLogo className="h-20 w-20 text-blue-500 animate-pulse opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;

{
  /* <svg>
  <use xlink:href="./assets/img/icons.svg#icon-trending-up"></use>
</svg>; */
}

