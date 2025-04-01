import React from 'react';

const DemoComponent = ({ message }) => {
    return React.createElement("div", { className: "message" }, message);
};

var agentIcon = "src/assets/agentIcon-794eac73bc59daf3.svg";

const DemoComponent1 = ({ title }) => {
    return (React.createElement("div", { className: "demo-component1" },
        React.createElement("img", { src: agentIcon, alt: "Demo 1" }),
        React.createElement("h1", null, title)));
};

const DemoComponent2 = ({ description }) => {
    return (React.createElement("div", { className: "demo-component2" },
        React.createElement("p", null, description)));
};

const DemoComponent3 = ({ label }) => {
    return (React.createElement("div", { className: "demo-component3" },
        React.createElement("img", { src: agentIcon, alt: "Demo 3" }),
        React.createElement("span", null, label)));
};

const DemoComponent4 = ({ content }) => {
    return (React.createElement("div", { className: "demo-component4" },
        React.createElement("img", { src: agentIcon, alt: "Demo 4" }),
        React.createElement("div", null, content)));
};

export { DemoComponent, DemoComponent1, DemoComponent2, DemoComponent3, DemoComponent4 };
//# sourceMappingURL=index.js.map
