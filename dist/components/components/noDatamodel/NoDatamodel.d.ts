import React from "react";
interface props {
    srcImg: string;
    message?: string;
    button?: {
        message: string;
        onClick?: CallableFunction;
    };
    extraCss?: {
        img?: string;
        message?: string;
        button?: string;
    };
}
export default function NoDatamodel(props: props): React.JSX.Element;
export {};
