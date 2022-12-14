import React from "react";
import { NavLink } from "react-router-dom";
import DataTablePlugin from "../components/DataTablePlugin";

const EmployeeList = () => {
  return (
    <div className="employee-list">
      <h1>Employee List page</h1>
      <DataTablePlugin />
      <div className="home-button">
        <NavLink to={"/"}>Home</NavLink>
      </div>
    </div>
  );
};

export default EmployeeList;
