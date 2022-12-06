import React, { useRef } from "react";
import DateTimePicker from "./DateTimePicker";
import LabInput from "./LabInput";

const Form = () => {
  const firstNameInput = useRef();
  const lastNameInput = useRef();

  const saveEmployee = (e) => {
    e.preventDefault();
    console.log("okok");
    const data = {
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
    };

    console.log(data);
  };

  return (
    <form
      onSubmit={(e) => {
        saveEmployee(e);
      }}
    >
      <LabInput label="First Name" ref={firstNameInput} />
      <LabInput label="Last Name" ref={lastNameInput} />
      <DateTimePicker />

      <input type="submit" className="submit-employee" value="Save" />
    </form>
  );
};

export default Form;
