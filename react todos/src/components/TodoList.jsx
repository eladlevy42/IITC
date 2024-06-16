import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, toggleTodoComplete, deleteTodo }) => {
  return (
    <ul className="todo-wrapper">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          toggleTodoComplete={toggleTodoComplete}
          deleteTodo={deleteTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
};
export default TodoList;
