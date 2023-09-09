import React from "react";
import cl from './langSelector.module.css';

const LangSelector = ( children ) => {

    const ruStyles = [cl.elem];
    const enStyles = [cl.elem];
    const spStyles = [cl.elem];
    const chStyles = [cl.elem];

    if (children.lang === "ru") {
        ruStyles.push(cl.selected);
    } else if (children.lang === "en") {
        enStyles.push(cl.selected);
    } else if (children.lang === "sp") {
        spStyles.push(cl.selected);
    } else if (children.lang === "ch") {
        chStyles.push(cl.selected);
    }

    return (
        <div className={cl.langSelector}> 
            <span className={ruStyles.join(" ")} onClick={() => {children.setLang("ru")}}>Русский</span>
            <span className={enStyles.join(" ")} onClick={() => {children.setLang("en")}}>English</span>
            <span className={spStyles.join(" ")} onClick={() => {children.setLang("sp")}}>Español</span>
            <span className={chStyles.join(" ")} onClick={() => {children.setLang("ch")}}>中文</span>
        </div>
    )

    
   
}

export default LangSelector;