import { ArrowUpIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoInput.scss";

function TodoInput({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleInput = (event) => {
    setTodo(event.target.value);
    // console.log(event.target.value);
  };

  const handlePlusBtn = () => {
    if (todo.length > 0) {
      //id, name, isCompleted
      const newTodo = {
        id: uuidv4(),
        name: todo,
        iscompleyed: false,
      };
      const newTodos = [...todos, newTodo];
      console.log(newTodos);
      setTodos(newTodos);
      // console.log(todos); // give old state
    }
    // Clear input
    setTodo("");
  };

  return (
    <div className="todo__input flex my-4 gap-10 grow items-center justify-center">
      <input
        type="text"
        placeholder="Enter Todo . . ."
        className="bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md px-4 py-2 focus:outline-none caret-[#d400ff]"
        value={todo}
        onChange={handleInput}
      />
      <button className="" onClick={handlePlusBtn}>
        <PlusCircleIcon className="plus__icon h-10 w-10 text-gray-600 btn-outline cursor-pointer"></PlusCircleIcon>
      </button>
    </div>
  );
}

export default TodoInput;






