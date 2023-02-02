import React from "react";

/**
 * Component reusable to add a label, an input with props in params
 * @param {*} props
 */

const LabInput = React.forwardRef((props, ref) => {
  return (
    <div className="lab-input">
      <label>{props.label}</label>
      <input type="text" ref={ref} />
    </div>
  );
});

export default LabInput;
