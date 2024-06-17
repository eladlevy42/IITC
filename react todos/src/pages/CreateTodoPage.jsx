import React, { useRef } from "react";
import { useLocation } from "react-router";
import TodoForm from "../components/TodoForm";
import axios from "axios";

export default function CreateTodoPage() {
  function makeId(length = 5) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  async function postTodoApi(todo) {
    await axios.post(`http://localhost:8001/todos/`, todo);
  }
  const inputRef = useRef(null);
  async function addTodo(ev) {
    ev.preventDefault();
    inputRef.current.focus();
    if (inputRef.current.value != undefined) {
      const newTodo = {
        id: makeId(5),
        title: inputRef.current.value,
        isComplete: false,
      };
      inputRef.current.value = "";
      await postTodoApi(newTodo);
      const copyTodos = [...todos, newTodo];
      setTodos(copyTodos);
    }
  }
  const location = useLocation();
  return (
    <div className="content-wrapper">
      <div className="content-card">
        <TodoForm inputRef={inputRef} addTodo={addTodo} />
      </div>
    </div>
  );
}
