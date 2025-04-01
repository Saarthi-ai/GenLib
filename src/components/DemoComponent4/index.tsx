import React from "react";
import "./DemoComponent4.module.scss"; // Ensure this matches the actual file name and location
import agentIcon from "../../assets/agentIcon.svg";

interface DemoComponent4Props {
  content: string;
}

const DemoComponent4: React.FC<DemoComponent4Props> = ({ content }) => {
  return (
    <div className="demo-component4">
      <img src={agentIcon} alt="Demo 4" />
      <div>{content}</div>
    </div>
  );
};

export default DemoComponent4;
