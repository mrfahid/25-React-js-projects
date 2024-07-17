import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editableTodoId, setEditableTodoId] = useState(null);
  const [updatedTodoText, setUpdatedTodoText] = useState("");

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleEdit = (id, text) => {
    setEditableTodoId(id);
    setUpdatedTodoText(text);
  };

  const handleUpdate = (id) => {
    if (updatedTodoText.trim() !== "") {
      dispatch(updateTodo({ id, text: updatedTodoText }));
      setEditableTodoId(null);
      setUpdatedTodoText("");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-8/12">
        <ul className="list-none w-full">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              {editableTodoId === todo.id ? (
                <input
                  type="text"
                  value={updatedTodoText}
                  onChange={(e) => setUpdatedTodoText(e.target.value)}
                  className="bg-gray-200 rounded px-2 py-1 w-3/4"
                />
              ) : (
                <div className={`text-white ${todo.completed ? "line-through" : ""}`}>
                  {todo.text}
                </div>
              )}
              <div className="flex gap-2">
                {editableTodoId === todo.id ? (
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo.id, todo.text)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleToggleComplete(todo.id)}
                  className={`${
                    todo.completed ? "bg-green-500" : "bg-gray-500"
                  } text-white border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md`}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
