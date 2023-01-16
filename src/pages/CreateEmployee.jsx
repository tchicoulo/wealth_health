import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";
import ModalDialog from "stv-modal-plugin";

const CreateEmployee = (data) => {
  const [modal, setModal] = useState(false);

  let background = {
    top: 0,
    height: "150vh",
    justifyContent: "center",
    background: "black",
  };

  let containerModal = {
    position: "fixed",
    marginBottom: "500px",
    //   justifyContent: "left",
    //   marginLeft: "50px",
    //   paddingLeft: "50px",
  };

  // let styleText = {
  //   color: "green",
  //   textDecoration: "underline",
  // };

  return (
    <div>
      {modal ? (
        <ModalDialog
          text="Employee Created!"
          handleClick={() => setModal(false)}
          background={background}
          containerModal={containerModal}
          // styleText={styleText}
        />
      ) : null}
      <div className="create-employee">
        <div className="title-area">
          <h1>HRnet</h1>
          <NavLink to={"/employee-list"}>View Current Employees</NavLink>
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
