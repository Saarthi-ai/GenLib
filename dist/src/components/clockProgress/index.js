import React, { useState, useEffect } from 'react';

var styles = {"clock":"clockProgress-module_clock__8fpkE","needle":"clockProgress-module_needle__ssS2z"};

var agentIcon = "../assets/agentIcon-794eac73bc59daf3.svg";

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
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("img", { src: agentIcon, alt: "Agent Icon" }),
            React.createElement("div", { className: styles.clock, style: (_b = {},
                    _b['--background'] = getGradient(rotation),
                    _b) },
                React.createElement("div", { className: styles.needle, style: {
                        transform: "rotate(".concat(rotation, "deg)"),
                    } }))),
        React.createElement("div", null,
            Math.floor(time / 3600) !== 0 && React.createElement("span", null,
                Math.floor(time / 3600),
                " hr "),
            Math.floor((time % 3600) / 60) !== 0 && React.createElement("span", null,
                Math.floor((time % 3600) / 60),
                " mins "),
            (Math.floor(time % 3600 % 60) !== 0 || Math.floor((time % 3600) / 60) === 0) && React.createElement("span", null,
                Math.floor(time % 3600 % 60),
                " secs "),
            "remaining")));
};

export { ClockProgress as default };
//# sourceMappingURL=index.js.map
