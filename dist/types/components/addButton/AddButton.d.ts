import React from "react";
type Props = {
    text: string;
    extraClass?: string;
    onCountChange: (count: number) => void;
    getCount?: number | 0;
};
declare const AddButton: (props: Props) => React.JSX.Element;
export default AddButton;
