import React, { useState } from "react";
import cl from "./supPage.module.css";
import logoSrc  from "../../../images/logo.png";
import Links from "../../info/links";
import LangSelector from "../../langSelector/langSelector";
import { getLang } from "../../../utils/constants";
import Footer from "../../footer/footer";

const SupPage = () => {

    let defaultLang = "";

    if (localStorage.getItem("langCode") == null) {
        defaultLang = "ru";
    } else {
        defaultLang = localStorage.getItem("langCode");
    }

    const [langCode, setLangCode] = useState(defaultLang)

    const switchLang = (newLang) => {
        setLangCode(newLang);
        localStorage.setItem("langCode", newLang);
    }

    let lang = getLang(langCode)

    return (
        <div>

            <div className={cl.content}>

                <nav>
                    <Links lang = {getLang(langCode)}/>
                    <div>
                    <a href="https://ioreshkin.github.io/squareRoot/">
                        <img src={logoSrc} alt="" className={cl.logo} />
                    </a>
                    </div>
                    <LangSelector lang={getLang(langCode)} setLang={switchLang}/>    
                </nav>

                <div>
                    <span>{lang.supT1} </span>
                    <span className={cl.link}>sqrtprjctspprt@gmail.com</span>
                </div>

                <div>
                    <span>{lang.supT2}</span>
                    <a  href={lang.supLink} target="_blank">form</a>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default SupPage;