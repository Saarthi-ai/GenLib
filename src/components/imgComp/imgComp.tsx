import React, { useState, useEffect } from "react";

import { agentIcon } from "../../assets/index";

interface props {
    // duration: number;
}
const ImgComp:React.FC<props> = () => {
    return (
        <div>
            <img src={agentIcon} />
            <p>Agent 1</p>
        </div>
    );
}

export default ImgComp;