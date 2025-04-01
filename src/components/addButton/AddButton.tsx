import React, { useEffect, useState } from "react";
import styles from "./AddButton.module.scss";

type Props = {
  text: string;
  extraClass?: string;
  onCountChange: (count: number) => void;
  getCount?:number | 0;
};

const AddButton = (props: Props) => {
  const [count, setCount] = useState(1);
  const [showCounter, setShowCounter] = useState(false);

  const handleAddClick = () => {
    setShowCounter(true);
    setCount(1);
  };

  const handlePlusClick = () => {
    // const newCount = count + 1;)
    setCount((prev) => {
      if (Number.isNaN(prev)) {
        prev = 0;
      }
      props.onCountChange(prev + 1);
      return prev + 1;
    });
  };
  function inputChange(e: string) {
    setCount(parseInt(e) || 0);
    props.onCountChange(parseInt(e));
  }

  const handleMinusClick = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      props.onCountChange(newCount);
    } else {
      setShowCounter(false);
      // props.onCountChange(0);
    }
  };

  useEffect(()=>{
    if(props.getCount){
      setShowCounter(true);
      setCount(props.getCount);
    }
  },[props.getCount])

  useEffect(() => {
    if (showCounter) {
      props.onCountChange(count);
    } else {
      props.onCountChange(0);
    }
  }, [showCounter]);

  return (
    <div
      className={props.extraClass ? props.extraClass : styles.addButtonWrapper}
    >
      {!showCounter  ? (
        <div className={styles.textClass} onClick={handleAddClick}>
          {props.text}
        </div>
      ) : (
        <div className={styles.plusMinusClass}>
          <div onClick={handleMinusClick}>-</div>
          <input
            className={styles.inputbox}
            value={count}
            onChange={(e) =>  {
              inputChange(e.target.value);
            }}
          ></input>
          <div onClick={handlePlusClick}>+</div>
        </div>
      )}
    </div>
  );
};

export default AddButton;
