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
import { useState } from 'react';
export var ButtonToggle = function (_a) {
    var _b = _a.initialState, initialState = _b === void 0 ? false : _b;
    var _c = useState(initialState), isToggled = _c[0], setIsToggled = _c[1];
    return (_jsx("button", __assign({ onClick: function () { return setIsToggled(!isToggled); } }, { children: isToggled ? 'ON' : 'OFF' })));
};
