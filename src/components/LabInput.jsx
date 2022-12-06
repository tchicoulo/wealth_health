import React from "react";

const LabInput = React.forwardRef((props, ref) => {
  return (
    <div className="lab-input">
      <label>{props.label}</label>
      <input type="text" ref={ref} />
    </div>
  );
});

export default LabInput;
