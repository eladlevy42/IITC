import React, { useEffect, useRef, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import CreateTodoPage from "./pages/CreateTodoPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import TodoPage from "./pages/TodoPage";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/HomePage";
import Footer from "./components/Footer";
import TodoLayout from "./pages/TodoLayout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/todo" element={<TodoLayout />}>
          <Route index element={<TodoPage />} />
          <Route path="create" element={<TodoPage />}>
            <Route index element={<CreateTodoPage />} />
          </Route>
          <Route path=":todoId" element={<TodoDetailsPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
