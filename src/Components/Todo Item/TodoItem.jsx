import { CheckCircleIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import "./TodoItem.scss";
import { useState } from "react";

function TodoItem({ index, todoItem: { id, name, isCompleted }, todos, setTodos }) {
  const[isEdit, setIsEdit] = useState(false);
  const[editTodoName, setEditTodoName] = useState("");
  
  const handleDelete = () => {
    // console.log(id);
    const newTodos = todos.filter(item => {
      if (id === item.id) return false;
      return true;
    })

    setTodos(newTodos);
  }

  const handleEdit = () => {
    setIsEdit(!isEdit);
    setEditTodoName(name);
  }
  
  const handleSubmit = (e) => {
    // console.log(e);
    if(e?.type === "keydown" && e.keyCode !== 13){
      return; // ignore other keys
    }
    setTodos(editTodoName);
    const updatedTodos = todos.map(item => {
      if (id === item.id) return { ...item, name: editTodoName };
      return item;
    });

    setTodos(updatedTodos);

    setIsEdit(!isEdit);

  }

  let editButtonIcon = isEdit ? (
    <button className="" onClick={handleSubmit}>
      <CheckCircleIcon className="h-7 w-7 text-gray-600 cursor-pointer check__icon" />
    </button>
  ) : (
    <button className="" onClick={handleEdit}>
      <PencilSquareIcon className="h-6 w-6 text-gray-600 cursor-pointer btn-outline" />
    </button>
  );

  const handleCompleted = () => {
    const updatedTodos = todos.map((item) => {
      if (id === item.id) return { ...item, isCompleted: !isCompleted };
      return item;
    });

    setTodos(updatedTodos);
  }

  const textDecoration = {
    textDecoration: isCompleted ? "line-through" : "none",
    // color: isCompleted ? "black" : "white",
  };


  return (
    <div className="todo__item--outer flex items-center justify-center">
      <div className="todo__item--inner p-4 flex gap-x-8 items-center justify-center">
        {/* Todo */}
        <div className="todo__txt flex items-start grow">
          <span className="todo__num cursor-pointer text-lg me-2">{`${index}.`}</span>
          <div
            className="todo text-lg rounded-lg whitespace-normal break-words break-all"
            style={textDecoration}
          >
            {isEdit ? (
              <input
                className={isEdit ? "input-base input-edit" : "input-base"}
                // style={editTextInput}
                autoFocus={isEdit}
                type="text"
                value={editTodoName}
                onChange={(e) => {
                  setEditTodoName(e.target.value);
                }}
                onKeyDown={handleSubmit}
              ></input>
            ) : (
              <div className="cursor-pointer" onClick={handleCompleted}>
                {name}
              </div>
            )}
          </div>
        </div>

        {/* buttons */}
        <div className="flex gap-x-4">
          {editButtonIcon}
          <button className="" onClick={handleDelete}>
            <TrashIcon className="h-6 w-6 text-gray-600 btn-outline btn-trash cursor-pointer"></TrashIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;


