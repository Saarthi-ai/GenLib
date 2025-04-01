import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import style from './donutChartDash.module.scss'
import DonutChart from "react-donut-chart";
import icons from "../../assets/index";
import { useNavigate } from "react-router-dom";
import NoDatamodel from "../../components/noDatamodel/NoDatamodel";


interface ProgressProps {
  data: any;
  totalCohort: number;
}

const DonutChartDashboard: React.FC<ProgressProps> = ({ data, totalCohort }) => {
  const [tooltip, setTooltip] = useState<any>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY })
  }
  const navigate = useNavigate();

  const finalData = data.filter((cohort: any) => cohort.label !== 'Total cohort');

  return (
    <div>
      {finalData?.length > 0
        ? <div onMouseMove={handleMouseMove} style={{ position: 'relative' }}>
          <DonutChart
            className={style.donutChartDashboard}
            data={finalData}
            innerRadius={0.5}
            colors={['#93E5FF', '#FFE193', '#FF93AD', '#93ABFF', '#C393FF']}
            height={424}
            width={630}
            strokeColor="false"
            onMouseEnter={(item:any) => setTooltip(item)}
            onMouseLeave={() => setTooltip(null)}
          />
        </div>
        :
        <div className={style.error} style={{ position: 'relative' }}>
          <NoDatamodel
            srcImg={icons.noPhoneDataIcon}
            // message="Ooops!! We can’t seem to find a page you are looking for."
            extraCss={{ message: style.message, img: style.img }}
          // button={{ message: "Back to Home", onClick: () => navigate('/') }}
          ></NoDatamodel>
        </div>}
      {tooltip && <div className={style.tooltipStyle} style={{
        top: tooltipPosition.y + 10, left: tooltipPosition.x + 10
      }}>
        <p>{tooltip.label}: {(tooltip.value * totalCohort) / 100}</p>
      </div>}
    </div>
  );
}

export default DonutChartDashboard;