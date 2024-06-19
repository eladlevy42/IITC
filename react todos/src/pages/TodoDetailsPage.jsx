import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function TodoDetailsPage() {
  const [todo, setTodo] = useState("");

  const { todoId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/todos/${todoId}`
        );
        setTodo(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function getTodoId() {}
  const id = getTodoId();

  const navigate = useNavigate();
  async function deleteTodoApi(todoId) {
    await axios.delete(`http://localhost:8001/todos/${todoId}`);
    navigate("/Todo", { replace: true });
  }

  return (
    <div className="content-wrapper">
      <div className="content-card">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/Todo", { replace: true });
          }}
        >
          Back
        </Button>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <Button
          variant="contained"
          onClick={() => {
            deleteTodoApi(todo.id);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
