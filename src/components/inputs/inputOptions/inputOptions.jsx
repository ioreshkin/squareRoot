import React from "react";
import cl from "./inputOptions.module.css";

const InputOptions = ({setAcc, setDeg, lang}) => {
    return (
        <div className={cl.box}>
            <input className={cl.input + " " + cl.deg} type="text" placeholder={lang.rd} onChange={event => {event.target.value=event.target.value.replace(/[^0-9\-]/g, ''); setDeg(event.target.value)}} maxLength={3}/>
            <input className={cl.input + " " + cl.acc} type="text" placeholder={lang.sa} onChange={event => {event.target.value=event.target.value.replace(/[^0-9]/g, ''); setAcc(event.target.value)}} maxLength={2}/>
        </div>
            
    )
        
    
}

export default InputOptions;