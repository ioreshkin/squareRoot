import React from "react";
import cl from "./links.module.css";
import {ruInfoDoc, enInfoDoc, spInfoDoc, chInfoDoc, ruInfoSup, enInfoSup, spInfoSup, chInfoSup, ruInfoAbt, enInfoAbt, spInfoAbt, chInfoAbt, ruInfoUpd, enInfoUpd, spInfoUpd, chInfoUpd, ruSupportLink, enSupportLink, spSupportLink, chSupportLink} from "../../utils/constants";

const Links = ({lang}) => {

    

    return (
        <div className={cl.info}>
            <div>
                <a href="#"><span>{lang.infoDoc}</span></a>
            </div>
            <a href={lang.supLink} target="_blank"><span>{lang.infoSup}</span></a>
            <a href="#"><span>{lang.infoAbt}</span></a>
            <a href="#"><span>{lang.infoUpd}</span></a>
        </div>
    )
}

export default Links;