var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
var ToggleButton = function () {
    var _a = useState(false), isOn = _a[0], setIsOn = _a[1];
    var handleToggle = function () {
        setIsOn(function (prev) { return !prev; });
    };
    return _jsx("button", __assign({ onClick: handleToggle }, { children: isOn ? "On" : "Off" }));
};
export default ToggleButton;
