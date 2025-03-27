import { jsx as _jsx } from "react/jsx-runtime";
export var MyComponent = function (_a) {
    var title = _a.title;
    console.log('Rendering MyComponent with title:', title); // Debug log
    if (typeof title !== 'string') {
        console.log("title", title, typeof title);
        throw new Error("Invalid prop 'title' supplied to 'MyComponent'. Expected a string, but received ".concat(typeof title, "."));
    }
    return _jsx("h1", { children: title });
};
