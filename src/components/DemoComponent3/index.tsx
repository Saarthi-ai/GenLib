import React from "react";
import "./DemoComponent3.module.scss";
import agentIcon from "../../assets/agentIcon.svg"; // Adjust the path as necessary

interface DemoComponent3Props {
  label: string;
}

const DemoComponent3: React.FC<DemoComponent3Props> = ({ label }) => {
  return (
    <div className="demo-component3">
      <img src={agentIcon} alt="Demo 3" />
      <span>{label}</span>
    </div>
  );
};

export default DemoComponent3;
