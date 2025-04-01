import React from "react";
import "./Chip.scss";
import { deleteCircleBtn } from '../../assets/index';

interface props {
  key: string | number;
  value: string;
  onDelete?:any;
  extraWrapperClass?: string;
  deleteIcon?: any;
  disableDeleteIcon?: boolean;
  chipIcon?: any;
}

const Chip = (props: props) => {
  /*****************************  handlers  *****************************/
  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    const targetElement = event.currentTarget as HTMLDivElement;
    const deleteBtn = targetElement.querySelector(
      ".deleteBtn"
    ) as HTMLImageElement;
    if (deleteBtn) deleteBtn.classList.add("display__show");
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
    const targetElement = event.currentTarget as HTMLDivElement;
    const deleteBtn = targetElement.querySelector(
      ".deleteBtn"
    ) as HTMLImageElement;
    if (deleteBtn) deleteBtn.classList.remove("display__show");
  };


  return (
    <div
      className="custom__chip__wrapper"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.chipIcon && <img src={props.chipIcon} />}
      <span className="content">{props.value}</span>
      {!props.disableDeleteIcon && (
        <img
          src={deleteCircleBtn}
          alt=""
          className="deleteBtn"
          onClick={props.onDelete}
          onMouseDown={(event: any) => event.stopPropagation()}
        />
      )}
    </div>
  );
};

export default Chip;
