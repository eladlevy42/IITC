import { Divider } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function TodoLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default TodoLayout;
// fix the responsive small issues
