import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <NavLink className={"navlink"} to="/">
        Home
      </NavLink>
    </div>
  );
};

export default Error;
