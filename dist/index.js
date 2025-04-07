import { jsx, jsxs } from 'react/jsx-runtime';

const DemoComponent = ({ message }) => {
    return jsx("div", { className: "demo-component", children: message });
};

var agentIcon = "assets/agentIcon-794eac73bc59daf3.svg";

const DemoComponent1 = ({ title }) => {
    return (jsxs("div", { className: "demo-component1", children: [jsx("img", { src: agentIcon, alt: "Demo 1" }), jsx("h1", { children: title })] }));
};

const DemoComponent2 = ({ description }) => {
    return (jsx("div", { className: "demo-component2", children: jsx("p", { children: description }) }));
};

const DemoComponent3 = ({ label }) => {
    return (jsxs("div", { className: "demo-component3", children: [jsx("img", { src: agentIcon, alt: "Demo 3" }), jsx("span", { children: label })] }));
};

const DemoComponent4 = ({ content }) => {
    return (jsxs("div", { className: "demo-component4", children: [jsx("img", { src: agentIcon, alt: "Demo 4" }), jsx("div", { children: content })] }));
};

export { DemoComponent, DemoComponent1, DemoComponent2, DemoComponent3, DemoComponent4 };
