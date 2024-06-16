import React from "react";

const TodoItem = ({ todo, toggleTodoComplete, deleteTodo }) => {
  return (
    <li className="todo-list-item">
      <div className="list-item-content">
        <input
          type="checkbox"
          checked={todo.isComplete}
          id={todo.id}
          className={`${
            todo.isComplete ? "complete" : ""
          } todo-item-checkbox custom-checkbox`}
          onChange={() => {
            toggleTodoComplete(todo.id);
          }}
        />
        <label
          className={`${
            todo.isComplete ? "complete" : ""
          } todo-item-name custom-checkbox-label`}
          htmlFor={todo.id}
        >
          {todo.title}
        </label>
      </div>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete todo
      </button>
    </li>
  );
};

export default TodoItem;
