import React from "react";
import style from './colouredButton.module.scss';
var ColouredButton = function (_a) {
    var _b, _c;
    var actionType = _a.actionType, recommended = _a.recommended, colour = _a.colour, text = _a.text, icon = _a.icon, onUpload = _a.onUpload, onDownload = _a.onDownload, onEdit = _a.onEdit, item = _a.item;
    var starSvg = (React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M4.01295 2.21171C4.38749 1.27798 4.57476 0.811109 4.87902 0.746403C4.95902 0.729389 5.0417 0.729389 5.1217 0.746403C5.42596 0.811109 5.61323 1.27798 5.98777 2.21171C6.20077 2.74271 6.30726 3.0082 6.50654 3.18878C6.56243 3.23944 6.62311 3.28455 6.68771 3.32348C6.91803 3.4623 7.20555 3.48805 7.78059 3.53955C8.75404 3.62673 9.24076 3.67032 9.38939 3.94784C9.42018 4.00531 9.44111 4.06755 9.45131 4.13194C9.50059 4.44287 9.14278 4.76841 8.42715 5.41948L8.22842 5.60028C7.89385 5.90467 7.72657 6.05686 7.62981 6.24679C7.57177 6.36073 7.53285 6.48343 7.51462 6.60999C7.48422 6.82098 7.5332 7.04176 7.63118 7.48334L7.66618 7.64111C7.84188 8.433 7.92973 8.82895 7.82006 9.02357C7.72156 9.19839 7.54012 9.31031 7.33968 9.31988C7.11655 9.33054 6.80214 9.07434 6.17332 8.56194C5.75903 8.22436 5.55188 8.05557 5.32193 7.98963C5.11178 7.92937 4.88894 7.92937 4.67879 7.98963C4.44883 8.05557 4.24169 8.22436 3.8274 8.56194C3.19858 9.07434 2.88417 9.33054 2.66104 9.31988C2.4606 9.31031 2.27916 9.19839 2.18065 9.02357C2.07099 8.82895 2.15884 8.433 2.33454 7.64111L2.36954 7.48334C2.46752 7.04176 2.5165 6.82098 2.4861 6.60999C2.46787 6.48343 2.42895 6.36073 2.37091 6.24679C2.27415 6.05686 2.10686 5.90467 1.7723 5.60028L1.57357 5.41948C0.857944 4.76841 0.50013 4.44287 0.549406 4.13194C0.559612 4.06754 0.580541 4.00531 0.611325 3.94784C0.759958 3.67032 1.24668 3.62673 2.22012 3.53955C2.79517 3.48805 3.08269 3.4623 3.31301 3.32348C3.37761 3.28455 3.43829 3.23944 3.49418 3.18878C3.69345 3.0082 3.79995 2.74271 4.01295 2.21171Z", fill: "white", stroke: colour, strokeWidth: "0.7" })));
    var handleUploadClick = function () {
        if (actionType === 'upload') {
            var fileInput = document.getElementById('fileUpload');
            if (fileInput) {
                fileInput.click();
            }
        }
        else if (actionType === 'download' && onDownload) {
            onDownload(item.downloadUrl, item.filename);
        }
        else if (actionType === 'edit' && onEdit) {
            onEdit();
        }
    };
    var handleFileChange = function (event) {
        var files = event.target.files;
        if (files && files.length > 0 && onUpload) {
            var file = files[0];
            onUpload(file);
        }
    };
    return (React.createElement("div", null,
        React.createElement("div", { onClick: function () { return handleUploadClick(); } },
            React.createElement("div", { role: "button", className: style.buttonContainer, style: (_b = {}, _b['--colour'] = colour, _b) },
                React.createElement("div", { className: style.buttonContent },
                    text,
                    " ",
                    React.createElement("img", { src: icon, alt: "dsfad" })),
                " ",
                recommended && React.createElement("sup", null, starSvg)),
            recommended && React.createElement("p", { className: style.recommendLabel, style: (_c = {}, _c['--colour'] = colour, _c) }, "recommended")),
        actionType === 'upload' && (React.createElement("input", { type: "file", id: "fileUpload", accept: ".csv", style: { display: 'none' }, onChange: handleFileChange }))));
};
export default ColouredButton;
//# sourceMappingURL=colouredButton.js.map