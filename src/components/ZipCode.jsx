import React from "react";

/**
 * Component reusable to add a label, an input type number to add custom number
 * @param {*} props
 */

const ZipCode = React.forwardRef((props, ref) => {
  return (
    <div className="lab-input">
      <label>{props.label}</label>
      <input type="number" ref={ref} />
    </div>
  );
});

export default ZipCode;
