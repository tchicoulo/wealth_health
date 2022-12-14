import React from "react";
// import { useState } from "react";

const LabInputOption = React.forwardRef((props, ref) => {
  // const [option, setOption] = useState("");
  return (
    <div className="lab-input">
      <label>{props.label}</label>
      <select className="select" ref={ref}>
        {Array.from(props.data).map((element) => (
          <option
            value={element.abbreviation ? element.abbreviation : element}
            key={element.name ? element.name : element}
            onChange={(e) => e.target.value}
          >
            {element.name ? element.name : element}
          </option>
        ))}
      </select>
    </div>
  );
});

export default LabInputOption;
