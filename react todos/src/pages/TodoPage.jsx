import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import TodoForm from "../components/TodoForm";
import FilterTodos from "../components/FilterTodos";
import TodoList from "../components/TodoList";
import { Button, Typography } from "@mui/material";
import CustomizedProgressBars from "../components/TodoStatistics";
import { Link } from "react-router-dom";

export default function TodoPage() {
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
  // function App() {
  //states
  const [todos, setTodos] = useState("");
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  //useEffects
  async function refreshData() {
    setLoading(true);
    const response = await axios.get(`http://localhost:8001/todos`);
    const init_todos = response.data;
    setTodos(init_todos);
    setLoading(false);
  }
  async function getData() {
    setLoading(true);
    const response = await axios.get(`http://localhost:8001/todos`);
    const init_todos = response.data;
    setLoading(false);
    return init_todos;
  }

  useEffect(() => {
    console.log("hello!");
    refreshData();
  }, []);

  useEffect(() => {}, [todos]);

  ///userefs
  const searchRef = useRef(null);
  const checkRef = useRef(null);

  //functions

  async function deleteTodo(todoId) {
    await deleteTodoApi(todoId);
    const copyTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(copyTodos);
  }
  async function deleteTodoApi(todoId) {
    await axios.delete(`http://localhost:8001/todos/${todoId}`);
  }
  async function toggleTodoApi(todo) {
    todo.isComplete = !todo.isComplete;

    await axios.put(`http://localhost:8001/todos/${todo.id}`, todo);
    refreshData();
  }
  async function postTodoApi(todo) {
    await axios.post(`http://localhost:8001/todos/`, todo);
  }
  function toggleTodoComplete(todoId) {
    const copyTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        toggleTodoApi(todo);
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(copyTodos);
  }
  async function search() {
    console.log("searching...");
    const searchValue = searchRef.current.value;
    let copyTodos = await getData();
    copyTodos = copyTodos.filter(
      (todo) => todo.title.includes(searchValue) && todo.isComplete === checked
    );
    if (copyTodos.length == 0) {
      console.log("empty");
      refreshData();
      return;
    }
    setTodos(copyTodos);
  }
  return (
    <div className="content-wrapper">
      <div className="content-card">
        {todos.length === 0 ? (
          <></>
        ) : (
          <>
            <Button component={Link} to={"/Create"}>
              Add New Todo
            </Button>
            <FilterTodos
              setChecked={setChecked}
              checked={checked}
              search={search}
              searchRef={searchRef}
              checkRef={checkRef}
            ></FilterTodos>
            <div>
              <TodoList
                loading={loading}
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodoComplete={toggleTodoComplete}
              ></TodoList>
            </div>
            <div>
              <div className="detail-wrapper">
                <p className="detail-paragraph">Total todos: {todos.length}</p>
                <p className="detail-paragraph">
                  Completed todos:
                  {todos.filter((todo) => todo.isComplete === true).length}
                </p>
                <p className="detail-paragraph">
                  Active Todos:
                  {
                    todos.filter((todo) => {
                      return todo.isComplete === false;
                    }).length
                  }
                </p>
              </div>
              <Typography mt={2}>Todos progress:</Typography>

              <CustomizedProgressBars todos={todos}></CustomizedProgressBars>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
