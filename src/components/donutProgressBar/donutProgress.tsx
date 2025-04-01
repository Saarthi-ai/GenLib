import React from "react";
// import "./donutProgress.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import style from './donutProgress.module.scss'

interface ProgressProps {
  percentage: number
}

const DonutProgress: React.FC<ProgressProps> = ({ percentage }) => {
  return (
    <div className={style.circularProgressDiv}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
        pathColor: 'black',
        textColor: 'black',
      })} />
    </div>
  );
}

export default DonutProgress;
