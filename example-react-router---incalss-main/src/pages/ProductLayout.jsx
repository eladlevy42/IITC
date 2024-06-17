import React from "react";
import { Link, Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <>
      <header>
        <div>ProductLayout</div>
        <Link to="new">New Product </Link>
      </header>
      <Outlet context={[{ name: "desk", price: 100 }]} />
      <footer>footer</footer>
    </>
  );
}

export default ProductLayout;
