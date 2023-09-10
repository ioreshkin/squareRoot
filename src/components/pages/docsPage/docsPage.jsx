import React, { useState } from "react";
import cl from "./docsPage.module.css"
import logoSrc  from "../../../images/logo.png";
import Links from "../../info/links";
import LangSelector from "../../langSelector/langSelector";
import { getLang } from "../../../utils/constants";
import Footer from "../../footer/footer";


const DocsPage = () => {


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
        <div className={cl.docsPage}>
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
                <h2>{lang.docT1}</h2>
                <p>{lang.docT2}</p>
                <p>{lang.docT3}</p>
                <p>{lang.docT4}</p>
                <ul>
                    <li>{lang.docT4l1}</li>
                    <li>{lang.docT4l2}</li>
                    <li>{lang.docT4l3}</li>
                    <li>{lang.docT4l4}</li>
                    <li>{lang.docT4l5}</li>
                    <li>{lang.docT4l6}</li>
                </ul>
                <p>{lang.docT5}</p>
                <ul>
                    <li>{lang.docT5l1}</li>
                    <li>{lang.docT5l2}</li>
                    <li>{lang.docT5l3}</li>
                    <li>{lang.docT5l4}</li>
                </ul>
                <p>{lang.docT6}</p>
                <ul>
                    <li>{lang.docT6l1}</li>
                    <li>{lang.docT6l2}</li>
                    <li>{lang.docT6l3}</li>
                    <li>{lang.docT6l4}</li>
                    <li>{lang.docT6l5}</li>
                    <li>{lang.docT6l6}</li>
                </ul>
            </div>

            <Footer/>

        </div>
    )
}

export default DocsPage;