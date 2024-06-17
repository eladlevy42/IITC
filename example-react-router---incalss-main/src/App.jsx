import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFound from "./pages/NotFound";
import ProductLayout from "./pages/ProductLayout";

function TopNavLink(props) {
  const { href, children } = props;
  return (
    <NavLink
      style={({ isActive }) => {
        return isActive ? { color: "salmon" } : {};
      }}
      to={href}
    >
      {children}
    </NavLink>
  );
}

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <TopNavLink href="/">Home</TopNavLink>
          </li>
          <li>
            <TopNavLink href="/about">About</TopNavLink>
          </li>
          <li>
            <TopNavLink href="/product">Product</TopNavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/product" element={<ProductLayout />}>
          <Route index element={<ProductPage />} />
          <Route path=":productId" element={<ProductDetailsPage />} />
          <Route path="new" element={<div>New</div>} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
