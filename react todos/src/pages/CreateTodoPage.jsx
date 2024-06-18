import React, { useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Button, Typography, Modal, Box } from "@mui/material";
import TodoForm from "../components/TodoForm";
import axios from "axios";

export default function CreateTodoPage() {
  async function GetTodos() {
    const response = await axios.get(`http://localhost:8001/todos`);
    return response.data;
  }
  const todos = GetTodos();
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
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };

  async function addTodo(ev) {
    ev.preventDefault();
    titleRef.current.focus();
    if (titleRef.current.value != undefined) {
      const newTodo = {
        id: makeId(5),
        title: titleRef.current.value,
        description: descRef.current.value,
        isComplete: false,
      };
      titleRef.current.value = "";
      await postTodoApi(newTodo);
      navigate("/Todo");
    }
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="content-wrapper">
            <div className="content-card">
              <h1>Create New Todo</h1>
              <TodoForm
                titleRef={titleRef}
                descRef={descRef}
                addTodo={addTodo}
              />
            </div>
          </div>{" "}
        </Box>
      </Modal>
    </>
  );
}
