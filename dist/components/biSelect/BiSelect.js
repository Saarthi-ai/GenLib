import React, { useState } from "react";
import styles from "./BiSelect.module.scss";
var BiSelect = function (_a) {
    var opt1 = _a.opt1, opt2 = _a.opt2, defaultSelected = _a.defaultSelected, onUpdate = _a.onUpdate;
    var _b = useState(defaultSelected ? defaultSelected : opt1), selected = _b[0], setSelected = _b[1];
    var handleChange = function (event) {
        // selected(event.target.text)
        setSelected(event.target.innerHTML);
        console.log('bSC:', event.target.innerHTML);
        onUpdate(event);
    };
    return (React.createElement("div", { className: styles.biSelect },
        React.createElement("div", { onClick: handleChange, className: "".concat(styles.biSelectOption, " ").concat(selected == opt1 ? styles.selected : '') }, opt1),
        React.createElement("div", { onClick: handleChange, className: "".concat(styles.biSelectOption, " ").concat(selected == opt2 ? styles.selected : '') }, opt2)));
};
export default BiSelect;
//# sourceMappingURL=BiSelect.js.map