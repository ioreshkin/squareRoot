import React from "react";
import cl from "./numButtom.module.css";

const NumButton = ({children, printNum, imgSrc}) => {

    //TODO if (children == "C") {clear}

    return (
        <div className={cl.but} onClick={() => printNum(children)}>
            {/* <img src={imgSrc} alt="" /> */}
            1
        </div>
    )
}

export default NumButton;