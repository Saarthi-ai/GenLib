import React from "react";
import styles from "./NoDatamodel.module.scss";
export default function NoDatamodel(props) {
    var _a, _b, _c, _d;
    // console.log(props.extraCss?.message, "no data");
    return (React.createElement("div", { className: styles.wrapper, "data-testid": "no-data-model" },
        React.createElement("img", { alt: "error", src: props.srcImg, className: styles.img + " " + ((_a = props.extraCss) === null || _a === void 0 ? void 0 : _a.img) }),
        props.message && (React.createElement("h2", { className: styles.message + " " + ((_b = props.extraCss) === null || _b === void 0 ? void 0 : _b.message) }, props.message)),
        ((_c = props.button) === null || _c === void 0 ? void 0 : _c.message) && (React.createElement("a", { className: styles.a + " " + ((_d = props.extraCss) === null || _d === void 0 ? void 0 : _d.button), onClick: function (e) {
                if (props.button && props.button.onClick) {
                    props.button.onClick();
                }
            }, "data-testid": "message" }, props.button.message))));
}
//# sourceMappingURL=NoDatamodel.js.map