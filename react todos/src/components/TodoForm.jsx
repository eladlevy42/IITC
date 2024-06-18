import React from "react";
import Button from "@mui/material/Button";
import { TextField, Tooltip } from "@mui/material";
const TodoForm = ({ addTodo, titleRef, descRef }) => {
  return (
    <form className="add-todo-form" onSubmit={addTodo}>
      <TextField
        sx={{ width: 150 }}
        inputRef={titleRef}
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
      <TextField
        sx={{ width: 150 }}
        inputRef={descRef}
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <Tooltip title="Add" arrow>
        <Button type="submit" variant="contained" sx={{ width: 150 }}>
          Add Todo
        </Button>
      </Tooltip>
    </form>
  );
};

export default TodoForm;
