import React from "react";
import cl from "./info.module.css";
import {ruInfoDoc, enInfoDoc, spInfoDoc, chInfoDoc, ruInfoSup, enInfoSup, spInfoSup, chInfoSup, ruInfoAbt, enInfoAbt, spInfoAbt, chInfoAbt, ruInfoUpd, enInfoUpd, spInfoUpd, chInfoUpd, ruSupportLink, enSupportLink, spSupportLink, chSupportLink} from "../../utils/constants";

const Info = (children) => {

    let doc;
    let sup;
    let abt;
    let upd;
    let supportLink;

    if (children.lang === "ru") {
        doc = ruInfoDoc;
        sup = ruInfoSup;
        abt = ruInfoAbt;
        upd = ruInfoUpd;
        supportLink = ruSupportLink;
    } else if (children.lang === "en") {
        doc = enInfoDoc;
        sup = enInfoSup;
        abt = enInfoAbt;
        upd = enInfoUpd;
        supportLink = enSupportLink;
    } else if (children.lang === "sp") {
        doc = spInfoDoc;
        sup = spInfoSup;
        abt = spInfoAbt;
        upd = spInfoUpd;
        supportLink = spSupportLink;
    } else if (children.lang === "ch") {
        doc = chInfoDoc;
        sup = chInfoSup;
        abt = chInfoAbt;
        upd = chInfoUpd;
        supportLink = chSupportLink;
    }
    

    return (
        <div className={cl.info}>
            <a href="#"><span>{doc}</span></a>
            <a href={supportLink} target="_blank"><span>{sup}</span></a>
            <a href="#"><span>{abt}</span></a>
            <a href="#"><span>{upd}</span></a>
        </div>
    )
}

export default Info;