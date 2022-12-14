import React from "react";
import { NavLink } from "react-router-dom";
import DataTablePlugin from "../components/DataTablePlugin";

const EmployeeList = () => {
  return (
    <div className="employee-list">
      <h1>Employee List page</h1>
      <DataTablePlugin />
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default EmployeeList;
