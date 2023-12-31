import React from "react";
import cl from "./inputNum.module.css"
import enterSrc from "../../../images/enter.png"

const InputNum = ( {calculate, setNum, num, lang}) => {



    return (
        <div className={cl.inputNum}>
            <input type="text" placeholder={lang.st} onChange={event => {event.target.value=event.target.value.replace(/[^0-9\.\-]/g, ''); setNum(event.target.value);}} value={num}   />
            <img src={enterSrc} alt="" onClick={() => calculate()}/>
        </div>
    )
}

export default InputNum;