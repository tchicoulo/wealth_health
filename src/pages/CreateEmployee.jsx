import React from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";

const CreateEmployee = () => {
  return (
    <div className="create-employee">
      <div className="title-area">
        <h1>HRnet</h1>
        <NavLink to={"/employee-list"}>View Current Employees</NavLink>
        <h2>Create Employee</h2>
      </div>
      <div className="form-area">
        <Form />
      </div>
    </div>
  );
};

export default CreateEmployee;
