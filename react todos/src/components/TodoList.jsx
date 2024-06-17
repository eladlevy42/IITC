import React from "react";
import TodoItem from "./TodoItem";
import { Skeleton } from "@mui/material";
const TodoList = ({ todos, toggleTodoComplete, deleteTodo, loading }) => {
  const skeleton = [];
  if (loading) {
    for (let i = 0; i < 6; i++) {
      skeleton.push(
        <li className="todo-list-item" key={i}>
          <Skeleton variant="rectangular" width={"100%"} />
        </li>
      );
    }
    return <ul className="todo-wrapper"> {skeleton}</ul>;
  }
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
