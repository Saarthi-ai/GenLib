"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyComponent = void 0;
var react_1 = __importDefault(require("react"));
var MyComponent = function (_a) {
    var title = _a.title;
    return react_1.default.createElement("h1", null, title);
};
exports.MyComponent = MyComponent;
