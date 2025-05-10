import React from "react";
import "./DemoComponent.module.scss"; // Ensure this matches the actual file name and location

interface DemoComponentProps {
  message: string;
}

const DemoComponent: React.FC<DemoComponentProps> = ({ message }) => {
  return <div className="demo-component">{message}</div>;
};

export default DemoComponent;
