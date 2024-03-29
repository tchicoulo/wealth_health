import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";
import ModalDialog from "stv-modal-plugin";

/**
 * CreateEmployee component page to add new informations
 * @param {boolean} data - data true/false for show/hide the modal library passed in the children component "Form"
 */

const CreateEmployee = (data) => {
  const [modal, setModal] = useState(false);

  let background = {
    top: 0,
    height: "164vh",
  };

  let containerModal = {
    position: "fixed",
    marginBottom: "500px",
    minWidth: "200px",
  };

  return (
    <div>
      {modal ? (
        <ModalDialog
          text="Employee Created!"
          handleClick={() => setModal(false)}
          background={background}
          containerModal={containerModal}
        />
      ) : null}
      <div className="create-employee">
        <div className="title-area">
          <h1>HRnet</h1>
          {localStorage.getItem("employees") ? (
            <NavLink to={"/employee-list"}>View Current Employees</NavLink>
          ) : null}

          <h2>Create Employee</h2>
        </div>
        <div className="form-area">
          <Form setModal={setModal} {...data} />
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
