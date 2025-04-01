import React from "react";

interface DemoComponentProps {
  message: string;
}

const DemoComponent: React.FC<DemoComponentProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default DemoComponent; // Ensure this default export exists
