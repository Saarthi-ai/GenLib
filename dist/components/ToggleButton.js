import React, { useState } from "react";
var ToggleButton = function () {
    var _a = useState(false), isOn = _a[0], setIsOn = _a[1];
    var handleToggle = function () {
        setIsOn(function (prev) { return !prev; });
    };
    return React.createElement("button", { onClick: handleToggle }, isOn ? "On" : "Off");
};
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map