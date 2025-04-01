import React, { useState } from "react";
import styles from "./BiSelect.module.scss";
const BiSelect:React.FC<any> = ({ opt1, opt2, defaultSelected, onUpdate }: any) => {
    const [selected, setSelected] = useState(defaultSelected ? defaultSelected : opt1);
    const handleChange = (event: any) => {
        // selected(event.target.text)
        setSelected(event.target.innerHTML);
        console.log('bSC:', event.target.innerHTML);
        onUpdate(event);
    }
    return (
        <div className={styles.biSelect}>
            <div onClick={handleChange} className={`${styles.biSelectOption} ${selected == opt1 ? styles.selected : ''}`}>
                {opt1}
            </div>
            <div onClick={handleChange} className={`${styles.biSelectOption} ${selected == opt2 ? styles.selected : ''}`}>
                {opt2}
            </div>
        </div>
    );
}

export default BiSelect;