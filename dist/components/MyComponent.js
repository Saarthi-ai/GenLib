import { jsx as _jsx } from "react/jsx-runtime";
export var MyComponent = function (_a) {
    var title = _a.title;
    console.log(typeof title, title);
    return _jsx("h1", { children: title });
};
