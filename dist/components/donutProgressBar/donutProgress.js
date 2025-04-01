import React from "react";
// import "./donutProgress.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import style from './donutProgress.module.scss';
var DonutProgress = function (_a) {
    var percentage = _a.percentage;
    return (React.createElement("div", { className: style.circularProgressDiv },
        React.createElement(CircularProgressbar, { value: percentage, text: "".concat(percentage, "%"), styles: buildStyles({
                pathColor: 'black',
                textColor: 'black',
            }) })));
};
export default DonutProgress;
//# sourceMappingURL=donutProgress.js.map