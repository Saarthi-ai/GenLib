import React from "react";

interface DemoComponentProps {
  message: string;
}

const DemoComponent: React.FC<DemoComponentProps> = ({ message }) => {
  return <div className="message">{message}</div>;
};

export default DemoComponent; // Ensure this default export exists
