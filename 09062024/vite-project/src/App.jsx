import React, { useState } from "react";
const INITIAL_TODOS = [
  { id: "1", title: "Learn React", isComplete: false },
  { id: "2", title: "Build a Todo App", isComplete: false },
  { id: "3", title: "Read JavaScript Documentation", isComplete: true },
  { id: "4", title: "Write Unit Tests", isComplete: false },
  { id: "5", title: "Implement Context", isComplete: true },
  { id: "6", title: "Create Portfolio Website", isComplete: false },
  { id: "7", title: "Learn TypeScript", isComplete: false },
  { id: "8", title: "Refactor Codebase", isComplete: true },
  { id: "9", title: "Optimize Performance", isComplete: false },
  { id: "10", title: "Deploy to Production", isComplete: true },
];
function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [newTodo, setNewTodo] = useState("");
  function toggleTodoComplete(todoId) {
    const copyTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(copyTodos);
  }

  function addTodo(ev) {
    ev.preventDefault();
  }
  function makeId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    if (todos.length == 0) {
      return <p>no todos avaliable</p>;
    }
    return (
      <>
        <ul>
          {todos.map((item) => {
            if (item.isComplete) {
              return (
                <li key={item.id}>
                  <span>{item.title}</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    onChange={() => {
                      toggleTodoComplete(item.id);
                    }}
                  />
                </li>
              );
            } else {
              return (
                <li key={item.id}>
                  <span>{item.title}</span>
                  <input
                    type="checkbox"
                    onChange={() => {
                      toggleTodoComplete(item.id);
                    }}
                  />
                </li>
              );
            }
          })}
        </ul>
        <form onSubmit={() => addTodo(ev)}>
          <input
            type="text"
            placeholder="enter new todo"
            onChange={() => setNewTodo(ev.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default App;
