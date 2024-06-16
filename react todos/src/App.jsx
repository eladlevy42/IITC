import React, { useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import FilterTodos from "./components/FilterTodos";
import axios from "axios";
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
function App() {
  //states
  const [todos, setTodos] = useState("");

  //useEffects
  async function getData() {
    const response = await axios.get(`http://localhost:8001/todos`);
    const init_todos = response.data;
    setTodos(init_todos);
  }

  useEffect(() => {
    console.log("hello!");
    getData();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  ///userefs

  const inputRef = useRef(null);
  const searchRef = useRef(null);
  const checkRef = useRef(null);

  //functions
  async function addTodo(ev) {
    ev.preventDefault();
    inputRef.current.focus();
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

  async function deleteTodo(todoId) {
    await deleteTodoApi(todoId);
    const copyTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(copyTodos);
  }
  async function deleteTodoApi(todoId) {
    await axios.delete(`http://localhost:8001/todos/${todoId}`);
  }
  async function toggleTodoApi(todo) {
    await axios.put(`http://localhost:8001/todos/${todo.id}`, todo);
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
  function search(ev) {
    ev.preventDefault();
    let copyTodos = todos;
    console.log(checkRef.current.value);
    console.log(
      searchRef.current.value != null && checkRef.current.value != null
    );
    if (searchRef.current.value != null && checkRef.current.value != null) {
      copyTodos = todos.filter(
        (todo) =>
          todo.title.includes(searchRef.current.value) &&
          todo.isComplete === checkRef.current.value
      );
    } else if (searchRef.current.value == null) {
      copyTodos = todos.filter(
        (todo) => todo.isComplete === checkRef.current.value
      );
    } else {
      copyTodos = todos.filter((todo) =>
        todo.title.includes(searchRef.current.value)
      );
    }
    console.log(copyTodos);
  }
  return (
    <div className="content-wrapper">
      <div className="content-card">
        {todos.length === 0 ? (
          <>
            <p className="no-todos-paragraph">No todos available</p>
          </>
        ) : (
          <>
            <TodoForm inputRef={inputRef} addTodo={addTodo}></TodoForm>

            <FilterTodos
              search={search}
              searchRef={searchRef}
              checkRef={checkRef}
            ></FilterTodos>
            <div>
              <TodoList
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
              <label className="progress-bar-label" htmlFor="progressBar">
                Todos progress:
              </label>
              <progress
                className="progress-bar"
                id="progressBar"
                value={todos.filter((todo) => todo.isComplete === true).length}
                max={todos.length}
              ></progress>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
