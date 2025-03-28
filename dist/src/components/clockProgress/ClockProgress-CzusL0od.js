import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

var styles = {"clock":"ClockProgress-module_clock__YwJxJ","needle":"ClockProgress-module_needle__W62Ir"};

var agentIcon = "src/assets/agentIcon-794eac73bc59daf3.svg";

var ClockProgress = function (_a) {
    var _b;
    var duration = _a.duration;
    var _c = useState(0), rotation = _c[0], setRotation = _c[1];
    var _d = useState(duration), time = _d[0], setTime = _d[1];
    useEffect(function () {
        var rotationPerSecond = 360 / duration;
        var interval = setInterval(function () {
            setRotation(function (prevRotation) { return Math.min(prevRotation + rotationPerSecond, 360); });
            setTime(function (prevTime) { return Math.max(prevTime - 1, 0); });
        }, 1000);
        return function () { return clearInterval(interval); }; // Cleanup on component unmount
    }, [duration]);
    var getGradient = function (rotation) {
        return "conic-gradient(white ".concat(rotation, "deg, #6C00C0 ").concat(rotation, "deg)");
    };
    return (jsxs("div", { children: [jsx("img", { src: agentIcon, alt: "Agent Icon" }), jsx("div", { className: styles.clock, style: (_b = {},
                    _b['--background'] = getGradient(rotation),
                    _b), children: jsx("div", { className: styles.needle, style: {
                        transform: "rotate(".concat(rotation, "deg)"),
                    } }) }), jsxs("div", { children: [Math.floor(time / 3600) > 0 && jsxs("span", { children: [Math.floor(time / 3600), " hr "] }), Math.floor((time % 3600) / 60) > 0 && jsxs("span", { children: [Math.floor((time % 3600) / 60), " mins "] }), jsxs("span", { children: [Math.floor(time % 60), " secs remaining"] })] })] }));
};

export { ClockProgress as C };
//# sourceMappingURL=ClockProgress-CzusL0od.js.map
