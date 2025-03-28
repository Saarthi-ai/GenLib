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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import styles from './clockProgress.module.scss'; // Ensure this import matches the file path
var ClockProgress = function (_a) {
    var _b;
    var duration = _a.duration;
    var _c = useState(0), rotation = _c[0], setRotation = _c[1];
    var _d = useState(duration), time = _d[0], setTime = _d[1];
    useEffect(function () {
        var rotationPerSecond = 360 / duration;
        setTime(duration);
        var interval = setInterval(function () {
            setRotation(function (prevRotation) {
                var newRotation = prevRotation + rotationPerSecond;
                return newRotation >= 360 ? 360 : newRotation;
            });
            setTime(function (prevTime) {
                var newTime = Math.max(prevTime - 1, 0);
                if (newTime === 0)
                    clearInterval(interval); // Stop interval when time reaches 0
                return newTime;
            });
        }, 1000);
        return function () { return clearInterval(interval); }; // Cleanup on component unmount
    }, [duration]);
    var getGradient = function (rotation) {
        return "conic-gradient(white ".concat(rotation, "deg, #6C00C0 ").concat(rotation, "deg)");
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: styles.clock, style: (_b = {},
                    _b['--background'] = getGradient(rotation),
                    _b) }, { children: _jsx("div", { className: styles.needle, style: {
                        transform: "rotate(".concat(rotation, "deg)"),
                    } }) })), _jsxs("div", { children: [Math.floor(time / 3600) !== 0 && _jsxs("span", { children: [Math.floor(time / 3600), " hr "] }), Math.floor((time % 3600) / 60) !== 0 && _jsxs("span", { children: [Math.floor((time % 3600) / 60), " mins "] }), (Math.floor(time % 3600 % 60) !== 0 || Math.floor((time % 3600) / 60) === 0) && _jsxs("span", { children: [Math.floor(time % 3600 % 60), " secs "] }), "remaining"] })] }));
};
export default ClockProgress;
