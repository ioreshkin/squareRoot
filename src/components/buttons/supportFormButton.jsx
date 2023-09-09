import React from "react";
import cl from "./supportFormButton.module.css";
import {ruSupportLink, enSupportLink, spSupportLink, chSupportLink} from "../../utils/constants";

const SupportFormButton = (children) => {
    let buttonText;
    let buttonLink;
    
    if (children.lang === "ru") {
        buttonText = "Сообщить об ошибке";
        buttonLink = ruSupportLink;
    } else if (children.lang === "en") {
        buttonText = "Feedback";
        buttonLink = enSupportLink;
    } else if (children.lang === "sp") {
        buttonText = "Испанская форма";
        buttonLink = spSupportLink;
    } else if (children.lang === "ch") {
        buttonText = "Китайская форма";
        buttonLink = chSupportLink;
    } 


         return (
            <div className={cl.button}><a href={buttonLink} >{buttonText}</a></div>
        )
   
}


export default SupportFormButton;