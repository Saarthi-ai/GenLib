import React from "react";
import "./DemoComponent.module.scss"; // Add CSS file import

interface DemoComponentProps {
  message: string;
}

const DemoComponent: React.FC<DemoComponentProps> = ({ message }) => {
  return <div className="demo-component">{message}</div>;
};

export default DemoComponent; // Ensure this default export exists
