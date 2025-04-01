import React, { useEffect, useState } from "react";
import styles from "./AddButton.module.scss";
var AddButton = function (props) {
    var _a = useState(1), count = _a[0], setCount = _a[1];
    var _b = useState(false), showCounter = _b[0], setShowCounter = _b[1];
    var handleAddClick = function () {
        setShowCounter(true);
        setCount(1);
    };
    var handlePlusClick = function () {
        // const newCount = count + 1;)
        setCount(function (prev) {
            if (Number.isNaN(prev)) {
                prev = 0;
            }
            props.onCountChange(prev + 1);
            return prev + 1;
        });
    };
    function inputChange(e) {
        setCount(parseInt(e) || 0);
        props.onCountChange(parseInt(e));
    }
    var handleMinusClick = function () {
        if (count > 1) {
            var newCount = count - 1;
            setCount(newCount);
            props.onCountChange(newCount);
        }
        else {
            setShowCounter(false);
            // props.onCountChange(0);
        }
    };
    useEffect(function () {
        if (props.getCount) {
            setShowCounter(true);
            setCount(props.getCount);
        }
    }, [props.getCount]);
    useEffect(function () {
        if (showCounter) {
            props.onCountChange(count);
        }
        else {
            props.onCountChange(0);
        }
    }, [showCounter]);
    return (React.createElement("div", { className: props.extraClass ? props.extraClass : styles.addButtonWrapper }, !showCounter ? (React.createElement("div", { className: styles.textClass, onClick: handleAddClick }, props.text)) : (React.createElement("div", { className: styles.plusMinusClass },
        React.createElement("div", { onClick: handleMinusClick }, "-"),
        React.createElement("input", { className: styles.inputbox, value: count, onChange: function (e) {
                inputChange(e.target.value);
            } }),
        React.createElement("div", { onClick: handlePlusClick }, "+")))));
};
export default AddButton;
//# sourceMappingURL=AddButton.js.map