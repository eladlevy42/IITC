import React from "react";

const TodoForm = ({ addTodo, inputRef }) => {
  return (
    <form className="add-todo-form" onSubmit={addTodo}>
      <label className="add-todo-label" htmlFor="todoAddInput">
        Add a new todo:
      </label>
      <input
        ref={inputRef}
        className="add-todo-input"
        type="text"
        id="todoAddInput"
        onChange={(ev) => {
          inputRef.current.value = ev.target.value;
        }}
      />
      <button className="add-todo-btn">Add todo</button>
    </form>
  );
};

export default TodoForm;
