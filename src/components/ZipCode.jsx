import React from "react";

const ZipCode = React.forwardRef((props, ref) => {
  return (
    <div className="lab-input">
      <label>{props.label}</label>
      <input type="number" ref={ref} />
    </div>
  );
});

export default ZipCode;
