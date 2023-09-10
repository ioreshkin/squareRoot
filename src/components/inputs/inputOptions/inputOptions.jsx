import React from "react";
import cl from "./inputOptions.module.css";

const InputOptions = ({setAcc, setDeg}) => {
    return (
        <div className={cl.box}>
            <input className={cl.input + " " + cl.deg} type="text" placeholder="ROOT DEGREE" onChange={event => setDeg(event.target.value)}/>
            <input className={cl.input + " " + cl.acc} type="text" placeholder="SET ACCURACY" onChange={event => setAcc(event.target.value)}/>
        </div>
            
    )
        
    
}

export default InputOptions;