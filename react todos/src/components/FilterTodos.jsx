import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Select, MenuItem, TextField } from "@mui/material";

const FilterTodos = ({ searchRef, checkRef, search, checked, setChecked }) => {
  // function debounce(func, delay) {
  //   let timeoutId;
  //   return function (...args) {
  //     if (timeoutId) {
  //       clearTimeout(timeoutId);
  //     }
  //     timeoutId = setTimeout(() => {
  //       func.apply(this, args);
  //     }, delay);
  //   };
  // }

  function debounce(callback, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback();
      }, delay);
    };
  }

  const handleChange = (event) => {
    setChecked(event.target.value);

    search();
  };
  return (
    <form onSubmit={search}>
      {/* <input type="text" ref={searchRef} placeholder="Enter Title"></input> */}
      <TextField
        sx={{ width: 150, padding: 0 }}
        inputRef={searchRef}
        id="outlined-basic"
        label="Enter Title"
        variant="outlined"
        onChange={debounce(search, 1000)}
      />

      <Select
        sx={{ width: 150, padding: 0 }}
        labelId="selectChecked"
        id="SelectChecked"
        value={checked}
        inputRef={checkRef}
        onChange={handleChange}
      >
        <MenuItem value={false}>Checked</MenuItem>
        <MenuItem value={true}>not-Checked</MenuItem>
      </Select>
    </form>
  );
};

export default FilterTodos;
