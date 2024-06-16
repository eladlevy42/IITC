import React, { useRef } from "react";

const FilterTodos = ({ searchRef, checkRef, search }) => {
  return (
    <form onSubmit={search}>
      <input type="text" ref={searchRef} placeholder="Enter Title"></input>
      <input type="checkbox" ref={checkRef}></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default FilterTodos;
