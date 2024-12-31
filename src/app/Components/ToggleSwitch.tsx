import React, { useState } from "react";

interface ToggleSwitchProps { 
  initialState?: boolean | null; 
  onChange?: (state: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({initialState = false, onChange }) => {
  const [isOn, setIsOn] = useState(initialState); 
  
  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) { 
      onChange(newState);  
    }
    
  };

  return ( 
      <div
        className="tw-relative tw-inline-block tw-w-12 tw-h-6 tw-mx-3"
        onClick={handleToggle}
        role="button"
        aria-pressed={isOn ? "true" : "false"} 
      > 
        <input type="checkbox" id="toggle" className="tw-absolute tw-inset-0 tw-opacity-0"/>
        <span
          className={`tw-absolute tw-inset-0  tw-rounded-full tw-transition-colors tw-shadow-sm tw-duration-200 ${
            isOn ? "tw-bg-sky-500" : "tw-bg-gray-300"
          }`}
        /> 
        <span
          className={`tw-absolute tw-top-0.5 tw-left-0.5 tw-w-5 tw-h-5 tw-bg-white tw-rounded-full tw-transition-transform tw-duration-200 ${
            isOn ? "tw-transform tw-translate-x-6" : ""
          }`}
        />
      </div>  
  );
};

export default ToggleSwitch;
