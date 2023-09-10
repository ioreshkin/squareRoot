import React from "react";
import cl from './langSelector.module.css';

const LangSelector = ( props ) => {

    const ruStyles = [cl.elem];
    const enStyles = [cl.elem];
    const spStyles = [cl.elem];
    const chStyles = [cl.elem];

    

    if (props.lang.code == "ru") {
        ruStyles.push(cl.selected);
    } else if (props.lang.code == "en") {
        enStyles.push(cl.selected);
    } else if (props.lang.code == "sp") {
        spStyles.push(cl.selected);
    } else if (props.lang.code == "ch") {
        chStyles.push(cl.selected);
    }

    return (
        <div className={cl.langSelector}> 
            <span className={ruStyles.join(" ")} onClick={() => {props.setLang("ru")}}>Русский</span>
            <span className={enStyles.join(" ")} onClick={() => {props.setLang("en")}}>English</span>
            <span className={spStyles.join(" ")} onClick={() => {props.setLang("sp")}}>Español</span>
            <span className={chStyles.join(" ")} onClick={() => {props.setLang("ch")}}>中文</span>
        </div>
    )

    
   
}

export default LangSelector;