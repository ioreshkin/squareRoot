import React, { useState } from "react";
import cl from "./inputNum.module.css"
import enterSrc from "../../../images/enter.png"

const InputNum = ( {calculate, setNum, num}) => {



    return (
        <div className={cl.inputNum}>
            <input type="text" placeholder="Start typing" onChange={event => setNum(event.target.value)} value={num}/>
            <img src={enterSrc}  onClick={() => calculate()}/>
        </div>
    )
}

export default InputNum;