import React, { useState } from 'react';

export interface ButtonToggleProps {
  initialState?: boolean;
}

export const ButtonToggle: React.FC<ButtonToggleProps> = ({ initialState = false }) => {
  const [isToggled, setIsToggled] = useState(initialState);

  return (
    <button onClick={() => setIsToggled(!isToggled)}>
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
};
