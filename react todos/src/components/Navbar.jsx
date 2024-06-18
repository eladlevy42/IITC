import React from "react";

import { Link, NavLink, Route, Routes } from "react-router-dom";
function TopNavLink(props) {
  const { href, children } = props;
  return (
    <NavLink
      style={({ isActive }) => {
        return isActive ? { color: "green" } : {};
      }}
      to={href}
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <TopNavLink href="/">Home</TopNavLink>
        </li>
        <li>
          <TopNavLink href="/Todo">My List</TopNavLink>
        </li>
      </ul>
    </nav>
  );
}
