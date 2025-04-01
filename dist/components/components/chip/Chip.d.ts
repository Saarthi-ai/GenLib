import React from "react";
import "./Chip.scss";
interface props {
    key: string | number;
    value: string;
    onDelete?: any;
    extraWrapperClass?: string;
    deleteIcon?: any;
    disableDeleteIcon?: boolean;
    chipIcon?: any;
}
declare const Chip: (props: props) => React.JSX.Element;
export default Chip;
//# sourceMappingURL=Chip.d.ts.map