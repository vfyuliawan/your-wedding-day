import React, { useState } from "react";

interface ToggleSwitchProps {
  labelState?: string;
  initialState?: boolean;
  valueState?: string;
  onChange?: (state: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ labelState = 'Toggle',initialState = false, valueState, onChange }) => {
  const [isOn, setIsOn] = useState(initialState);
  const [theValue, setTheValue] = useState(valueState);

  const handleToggle = () => {
    const newState = !isOn;
    setTheValue(valueState);
    setIsOn(newState);
    if (onChange) {
      onChange(newState); // Optional callback when toggle state changes
    }
    console.log('valueState,'), valueState;
    
  };

  return (
    <div className="tw-flex tw-items-center tw-space-x-4">
      <label className="tw-text-gray-700 tw-font-medium">{labelState}</label>

      {/* Toggle Switch */}
      <div
        className="tw-relative tw-inline-block tw-w-12 tw-h-6"
        onClick={handleToggle}
        role="button"
        aria-pressed={isOn ? "true" : "false"} 
      > <input type="checkbox" id="toggle" className="tw-absolute tw-inset-0 tw-opacity-0" value={theValue}/>
        <span
          className={`tw-absolute tw-inset-0  tw-rounded-full tw-transition-colors tw-shadow-sm tw-duration-200 focus:tw-outline-2 focus:tw-outline-indigo-600 ${
            isOn ? "tw-bg-indigo-500" : "tw-bg-gray-300"
          }`}
        /> 
        <span
          className={`tw-absolute tw-top-0 tw-left-0 tw-w-6 tw-h-6 tw-bg-white tw-rounded-full tw-transition-transform tw-duration-200 ${
            isOn ? "tw-transform tw-translate-x-6" : ""
          }`}
        />
      </div> 
      <span className="tw-text-gray-600">{isOn ? "On" : "Off"}</span>
    </div>
  );
};

export default ToggleSwitch;
