import React, { useState } from "react";
import cl from "./aboutPage.module.css";
import logoSrc  from "../../../images/logo.png";
import Links from "../../info/links";
import LangSelector from "../../langSelector/langSelector";
import { getLang } from "../../../utils/constants";
import Footer from "../../footer/footer";

const AboutPage = () => {

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
        <div className={cl.aboutPage}>

            <nav>
                <Links lang = {getLang(langCode)}/>
                <div>
                <a href="https://ioreshkin.github.io/squareRoot/">
                    <img src={logoSrc} alt="" className={cl.logo} />
                </a>
                </div>
                <LangSelector lang={getLang(langCode)} setLang={switchLang}/>    
            </nav>

            <div className={cl.content}>

                <h2>{lang.abtT1}</h2>

                <p>{lang.abtT2}</p>

                <p>{lang.abtT3}</p>

                <span>{lang.abtT4}</span>
                <span className={cl.link}>sqrtprjctspprt@gmail.com</span>


            </div>

            <Footer/>

        </div>

    )
}

export default AboutPage;