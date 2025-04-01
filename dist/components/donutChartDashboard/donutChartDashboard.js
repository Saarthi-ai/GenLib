import React, { useState } from "react";
import style from './donutChartDash.module.scss';
import DonutChart from "react-donut-chart";
import icons from "../../assets/index";
import { useNavigate } from "react-router-dom";
import NoDatamodel from "../../components/noDatamodel/NoDatamodel";
var DonutChartDashboard = function (_a) {
    var data = _a.data, totalCohort = _a.totalCohort;
    var _b = useState(null), tooltip = _b[0], setTooltip = _b[1];
    var _c = useState({ x: 0, y: 0 }), tooltipPosition = _c[0], setTooltipPosition = _c[1];
    var handleMouseMove = function (e) {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };
    var navigate = useNavigate();
    var finalData = data.filter(function (cohort) { return cohort.label !== 'Total cohort'; });
    return (React.createElement("div", null,
        (finalData === null || finalData === void 0 ? void 0 : finalData.length) > 0
            ? React.createElement("div", { onMouseMove: handleMouseMove, style: { position: 'relative' } },
                React.createElement(DonutChart, { className: style.donutChartDashboard, data: finalData, innerRadius: 0.5, colors: ['#93E5FF', '#FFE193', '#FF93AD', '#93ABFF', '#C393FF'], height: 424, width: 630, strokeColor: "false", onMouseEnter: function (item) { return setTooltip(item); }, onMouseLeave: function () { return setTooltip(null); } }))
            :
                React.createElement("div", { className: style.error, style: { position: 'relative' } },
                    React.createElement(NoDatamodel, { srcImg: icons.noPhoneDataIcon, 
                        // message="Ooops!! We can’t seem to find a page you are looking for."
                        extraCss: { message: style.message, img: style.img } })),
        tooltip && React.createElement("div", { className: style.tooltipStyle, style: {
                top: tooltipPosition.y + 10, left: tooltipPosition.x + 10
            } },
            React.createElement("p", null,
                tooltip.label,
                ": ",
                (tooltip.value * totalCohort) / 100))));
};
export default DonutChartDashboard;
//# sourceMappingURL=donutChartDashboard.js.map