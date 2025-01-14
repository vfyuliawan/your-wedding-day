import React, { useState } from 'react';

const TimeInput = () => {
  const [tempTime, setTempTime] = useState('');

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempTime(e.target.value);
  };

  return (
    <div className="time-input-container">
      {/* Label with clickable icon */}
      <label htmlFor="dateResepsi" className="input-group">
        <input
          type="time"
          className="form-control time-input-with-icon tw-h-12 tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
          id="dateResepsi"
          name="dateResepsi"
          onChange={handleTimeChange}
          value={tempTime}
        />
        {/* Icon inside label */}
        <i className="bi bi-clock"></i>
      </label>
    </div>
  );
};

export default TimeInput;
