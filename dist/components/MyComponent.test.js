"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var MyComponent_1 = require("./MyComponent"); // Fix import to use named export
test('renders MyComponent with the correct title', function () {
    (0, react_2.render)(react_1.default.createElement(MyComponent_1.MyComponent, { title: "Test Title" }));
    expect(react_2.screen.getByText('Test Title')).toBeInTheDocument();
});
test('basic test to ensure Jest is working', function () {
    expect(true).toBe(true);
});
