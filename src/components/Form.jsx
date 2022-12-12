import React, { useRef } from "react";
import DateTimePicker from "./DateTimePicker";
import LabInput from "./LabInput";
import moment from "moment";

const Form = () => {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const dateOfBirth = useRef();
  const startDate = useRef();

  const saveEmployee = (e) => {
    e.preventDefault();
    console.log("okok");
    const data = {
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      dateOfBirth: moment(dateOfBirth.current.props.selected).format("L"),
      startDate: moment(startDate.current.props.selected).format("L"),
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

      <input type="submit" className="submit-employee" value="Save" />
    </form>
  );
};

export default Form;
