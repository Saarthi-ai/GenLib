import React from "react";
import "./Chip.scss";
import icons from '../../assets/index';
var Chip = function (props) {
    /*****************************  handlers  *****************************/
    var handleMouseOver = function (event) {
        var targetElement = event.currentTarget;
        var deleteBtn = targetElement.querySelector(".deleteBtn");
        if (deleteBtn)
            deleteBtn.classList.add("display__show");
    };
    var handleMouseOut = function (event) {
        var targetElement = event.currentTarget;
        var deleteBtn = targetElement.querySelector(".deleteBtn");
        if (deleteBtn)
            deleteBtn.classList.remove("display__show");
    };
    return (React.createElement("div", { className: "custom__chip__wrapper", onMouseOver: handleMouseOver, onMouseOut: handleMouseOut },
        props.chipIcon && React.createElement("img", { src: props.chipIcon }),
        React.createElement("span", { className: "content" }, props.value),
        !props.disableDeleteIcon && (React.createElement("img", { src: icons.deleteCircleBtn, alt: "", className: "deleteBtn", onClick: props.onDelete, onMouseDown: function (event) { return event.stopPropagation(); } }))));
};
export default Chip;
//# sourceMappingURL=Chip.js.map