import React from "react";
import Button from "@mui/material/Button";
import { Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const TodoItem = ({ todo, toggleTodoComplete, deleteTodo }) => {
  return (
    <li className="todo-list-item">
      <div className="list-item-content">
        <input
          type="checkbox"
          checked={todo.isComplete}
          id={todo.id}
          className={`${todo.isComplete ? "complete" : ""} `}
          onChange={() => {
            toggleTodoComplete(todo.id);
          }}
        />
        <Typography
          className={`${todo.isComplete ? "complete" : ""} todo-item-name`}
          htmlFor={todo.id}
          mt={2}
          sx={{}}
        >
          {todo.title}
        </Typography>
        <label></label>
      </div>
      <Tooltip title="delete" arrow>
        <>
          <Button
            sx={{ fontSize: 10, fontWeight: "medium", marginBlock: 1 }}
            onClick={() => {
              deleteTodo(todo.id);
            }}
            variant="contained"
          >
            {" "}
            Delete todo
          </Button>
          <Button component={Link} to={"/Todo/" + todo.id}>
            Details
          </Button>
        </>
      </Tooltip>
    </li>
  );
};

export default TodoItem;
