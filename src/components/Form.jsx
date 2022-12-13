import React, { useRef } from "react";
import DateTimePicker from "./DateTimePicker";
import LabInput from "./LabInput";
import moment from "moment";
import states from "../services/dataStates";
import LabInputOption from "./LabInputOption";

const Form = () => {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const dateOfBirth = useRef();
  const startDate = useRef();
  const street = useRef();
  const city = useRef();
  const state = useRef();
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
    console.log("okok");
    const data = {
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      dateOfBirth: moment(dateOfBirth.current.props.selected).format("L"),
      startDate: moment(startDate.current.props.selected).format("L"),
      street: street.current.value,
      city: city.current.value,
      state: state.current.value,
      department: department.current.value,
    };

    console.log(data);
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
      <div className="adress-area">
        <span>Address</span>
        <LabInput label="Street" ref={street} />
        <LabInput label="City" ref={city} />
        <LabInputOption data={states} label="States" ref={state} />
        <LabInputOption
          data={departments}
          label="Department"
          ref={department}
        />
      </div>

      <input type="submit" className="submit-employee" value="Save" />
    </form>
  );
};

export default Form;
