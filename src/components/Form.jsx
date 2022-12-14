import React, { useRef } from "react";
import DateTimePicker from "./DateTimePicker";
import LabInput from "./LabInput";
import moment from "moment";
import states from "../services/dataStates";
import LabInputOption from "./LabInputOption";
import ZipCode from "./ZipCode";

const Form = () => {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const dateOfBirth = useRef();
  const startDate = useRef();
  const street = useRef();
  const city = useRef();
  const state = useRef();
  const zipCode = useRef();
  const department = useRef();

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Ressources",
    "Legal",
  ];

  const saveEmployee = (e) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const employee = {
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      dateOfBirth: moment(dateOfBirth.current.props.selected).format("L"),
      startDate: moment(startDate.current.props.selected).format("L"),
      street: street.current.value,
      city: city.current.value,
      state: state.current.value,
      zip: zipCode.current.value,
      department: department.current.value,
    };

    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        saveEmployee(e);
      }}
    >
      <LabInput label="First Name" ref={firstNameInput} />
      <LabInput label="Last Name" ref={lastNameInput} />
      <DateTimePicker label="Date of Birth" ref={dateOfBirth} />
      <DateTimePicker label="Start Date" ref={startDate} />
      <div className="address-area">
        <span>Address</span>
        <LabInput label="Street" ref={street} />
        <LabInput label="City" ref={city} />
        <LabInputOption data={states} label="States" ref={state} />
        <ZipCode label="Zip Code" ref={zipCode} />
      </div>
      <LabInputOption data={departments} label="Department" ref={department} />
      <div className="container-submit">
        <input type="submit" className="submit-employee" value="Save" />
      </div>
    </form>
  );
};

export default Form;
