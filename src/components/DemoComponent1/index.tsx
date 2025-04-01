import React from "react";
import "./DemoComponent1.module.scss";
import agentIcon from "../../assets/agentIcon.svg";

interface DemoComponent1Props {
  title: string;
}

const DemoComponent1: React.FC<DemoComponent1Props> = ({ title }) => {
  return (
    <div className="demo-component1">
      <img src={agentIcon} alt="Demo 1" />
      <h1>{title}</h1>
    </div>
  );
};

export default DemoComponent1; // Ensure this default export exists
