import React from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";

const CreateEmployee = () => {
  return (
    <div className="create-employee">
      <h1>HRnet</h1>
      <NavLink to={"/employee-list"}>View Current Employees</NavLink>
      <Form />
    </div>
  );
};

export default CreateEmployee;
