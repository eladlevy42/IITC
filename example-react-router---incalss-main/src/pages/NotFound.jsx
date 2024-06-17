import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function back() {
    navigate("/", { replace: true });
    // navigate(-1);
  }

  return (
    <>
      <div>NotFound</div>
      {/* <Navigate to="/" /> */}
      {/* <Link to="/">Back to home page</Link> */}
      <button onClick={back}>Back</button>
    </>
  );
}

export default NotFound;
