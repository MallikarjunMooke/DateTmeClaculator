import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles only once
import { addMinutes, format } from 'date-fns';


const DatePage = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [duration, setDuration] = useState(60); // Initial duration in minutes
  const [toDate, setToDate] = useState(addMinutes(new Date(), duration));

  const handleFromDateChange = (date) => {
    setFromDate(date);
    updateToDate(date, duration);
  };

  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value, 10) || 0;
    setDuration(newDuration);
    updateToDate(fromDate, newDuration);
  };

  const updateToDate = (fromDate, duration) => {
    const newToDate = addMinutes(fromDate, duration);
    setToDate(newToDate);
  };

  return (
    <div>
      <h1>Date Page</h1>
      <div>
        <label>From Date:</label>
        <DatePicker selected={fromDate} onChange={handleFromDateChange} showTimeSelect dateFormat="Pp" />
      </div>
      <div>
        <label>Duration (minutes):</label>
        <input type="number" value={duration} onChange={handleDurationChange} />
      </div>
      <div>
        <label>To Date:</label>
        <input type="text" value={format(toDate, "yyyy-MM-dd HH:mm:ss")} readOnly />
      </div>
    </div>
  );
};

export default DatePage;
