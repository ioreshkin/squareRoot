import React from "react";
import cl from "./links.module.css";
import {ruInfoDoc, enInfoDoc, spInfoDoc, chInfoDoc, ruInfoSup, enInfoSup, spInfoSup, chInfoSup, ruInfoAbt, enInfoAbt, spInfoAbt, chInfoAbt, ruInfoUpd, enInfoUpd, spInfoUpd, chInfoUpd, ruSupportLink, enSupportLink, spSupportLink, chSupportLink} from "../../utils/constants";
import { Link } from "react-router-dom";

const Links = ({lang}) => {

    

    return (
        <div className={cl.info}>
            <Link to={"/squareRoot/docs"}><span>{lang.infoDoc}</span></Link>
            <Link to={"/squareRoot/support"}><span>{lang.infoSup}</span></Link>
            <Link to={"/squareRoot/about"}><span>{lang.infoAbt}</span></Link>
            <Link to={"/squareRoot/updates"}><span>{lang.infoUpd}</span></Link>
        </div>
    )
}

export default Links;