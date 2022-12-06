import React from "react";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  return (
    <div className="employee-list">
      <h1>Employee List page</h1>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default EmployeeList;
