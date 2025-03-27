import React, { useState } from "react";

const ToggleButton: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return <button onClick={handleToggle}>{isOn ? "On" : "Off"}</button>;
};

export default ToggleButton;
