'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return jsxRuntime.jsx("button", __assign({ onClick: onClick }, { children: label }));
};

var ToggleButton = function () {
    var _a = react.useState(false), isOn = _a[0], setIsOn = _a[1];
    var handleToggle = function () {
        setIsOn(function (prev) { return !prev; });
    };
    return jsxRuntime.jsx("button", __assign({ onClick: handleToggle }, { children: isOn ? "On" : "Off" }));
};

var ClockProgress = function (_a) {
    var _b;
    var duration = _a.duration;
    var _c = react.useState(0), rotation = _c[0], setRotation = _c[1];
    var _d = react.useState(duration), time = _d[0], setTime = _d[1];
    react.useEffect(function () {
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
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", __assign({ className: undefined, style: (_b = {},
                    _b['--background'] = getGradient(rotation),
                    _b) }, { children: jsxRuntime.jsx("div", { className: undefined, style: {
                        transform: "rotate(".concat(rotation, "deg)"),
                    } }) })), jsxRuntime.jsxs("div", { children: [Math.floor(time / 3600) !== 0 && jsxRuntime.jsxs("span", { children: [Math.floor(time / 3600), " hr "] }), Math.floor((time % 3600) / 60) !== 0 && jsxRuntime.jsxs("span", { children: [Math.floor((time % 3600) / 60), " mins "] }), (Math.floor(time % 3600 % 60) !== 0 || Math.floor((time % 3600) / 60) === 0) && jsxRuntime.jsxs("span", { children: [Math.floor(time % 3600 % 60), " secs "] }), "remaining"] })] }));
};

exports.Button = Button;
exports.ClockProgress = ClockProgress;
exports.ToggleButton = ToggleButton;
//# sourceMappingURL=index.js.map
