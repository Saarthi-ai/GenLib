import React from "react";
import "./DemoComponent2.module.scss";


interface DemoComponent2Props {
  description: string;
}

const DemoComponent2: React.FC<DemoComponent2Props> = ({ description }) => {
  return (
    <div className="demo-component2">
  
      <p>{description}</p>
    </div>
  );
};

export default DemoComponent2;
