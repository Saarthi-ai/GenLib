"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var Button_1 = require("./Button");
test('renders Button with the correct label', function () {
    (0, react_2.render)(react_1.default.createElement(Button_1.Button, { label: "Click Me", onClick: function () { } }));
    expect(react_2.screen.getByText('Click Me')).toBeInTheDocument();
});
test('calls onClick when the button is clicked', function () {
    var handleClick = jest.fn();
    (0, react_2.render)(react_1.default.createElement(Button_1.Button, { label: "Click Me", onClick: handleClick }));
    react_2.fireEvent.click(react_2.screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
