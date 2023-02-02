import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * library dataTimePicker customisable
 * @param {*} props
 */

const DateTimePicker = React.forwardRef((props, ref) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-time-picker">
      <label>{props.label}</label>
      <DatePicker
        className="date-input"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        ref={ref}
      />
    </div>
  );
});

export default DateTimePicker;
