import React from "react";
import Button from "@mui/material/Button";
import { TextField, Tooltip } from "@mui/material";
const TodoForm = ({ addTodo, inputRef }) => {
  return (
    <form className="add-todo-form" onSubmit={addTodo}>
      <TextField
        sx={{ width: 150 }}
        inputRef={inputRef}
        id="outlined-basic"
        label="Add new Todo"
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
