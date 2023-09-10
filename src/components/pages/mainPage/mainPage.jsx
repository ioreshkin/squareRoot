import React from "react";
import cl from "./mainPage.module.css";
import Links from "../../info/links";
import LangSelector from "../../langSelector/langSelector";
import { bignumber, complex, forEach, format, nthRoot, sqrt } from "mathjs";
import { getLang } from "../../../utils/constants";
import { useState } from "react";
import logoSrc  from "../../../images/logo.png";
import InputNum from "../../inputs/inputNum/inputNum";
import Footer from "../../footer/footer";
import InputOptions from "../../inputs/inputOptions/inputOptions";
import NumButton from "../../buttons/numButton";
import sSrc from "../../../images/back.png"
import coSrc from "../../../images/co.png";
import loSrc from "../../../images/lo.png";
import anSrc from "../../../images/an.png";
import arSrc from "../../../images/ar.png";


const MainPage = () => {

    
    const [langCode, setLangCode] = useState("ru")

    const [num, setNum] = useState("")
  
    const [deg, setDeg] = useState(2)
  
    const [acc, setAcc] = useState(5)
  
    const [ans, setAns] = useState()
  
    const switchLang = (newLang) => {
      setLangCode(newLang);
    }

    const changeNum = (newNum) => {
      setNum(newNum);
    }

    const changeDeg = (newDeg) => {
      setDeg(newDeg);
    }

    const changeAcc = (newAcc) => {
      setAcc(newAcc);
    }
  

    const calculate = () => {
        let curAns = 0;
        let errorText = ""; 
    
        if (num > 0) {
          let a = bignumber(num);     
          if (deg % 2 === 0) {
            curAns = "± " + nthRoot(a,deg).toString();
          } else {
            curAns = nthRoot(a,deg).toString();
          }        
        } 
    
        if (num === '0' || num === "") {
          curAns = 0
        }

        if (num < 0) {
          
          if (deg % 2 != 0) {
            curAns = nthRoot(num,deg).toString();
          } else if (deg == 2) {
            curAns = sqrt(num).toString();
          } else {
            errorText= "Значение не определено(только из второй и нечетных степеней)";
          }
        }
       
    
        let isPlusMinus = false;    
    
        if (curAns[0] == "±") {
          isPlusMinus = true;
          curAns = curAns.slice(2)
    
        }    
        
        if (errorText == "") {
          if (acc == '0') {

            if (curAns[curAns.length-1] == "i") {
              curAns = complex(Math.round(curAns.toString().slice(0,-1)))
              if (curAns == "1") {
                curAns = "i";
              } else {
                curAns = curAns + "i";
              }
            } else {
               curAns = bignumber(Math.round(curAns.toString())) 
            }
    
            
            
          } else { 
            if (curAns[curAns.length-1] == "i") { 
              let a = curAns.toString().slice(0,curAns.toString().indexOf('.')); 
              curAns = format(complex(curAns), Number(a.length) + Number(acc));
            } else {  
              let a = curAns.toString().slice(0,curAns.toString().indexOf('.')); 
              curAns = format(bignumber(curAns), Number(acc)+Number(a.length));
            }
    
          }
        } else {
            curAns = errorText;
        }
        
          if (isPlusMinus) {
            curAns = "± " + curAns; 
          }

        
        setNum(curAns);
        
    }    
    


    return (
    <div>  

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
          <div className={cl.slogan}>
              <span>Simplify</span>
              <span>Finding any root!</span>
          </div>

          <InputNum calculate={calculate} setNum={changeNum} num={num}/>

          <div className={cl.calc}>
            <div className={cl.options}>
                <InputOptions setAcc={changeAcc} setDeg={changeDeg}/>
            </div>

            

            <div className={cl.numpad}>
              <div className={cl.row}>
                  <NumButton imgSrc={sSrc}>1</NumButton>  
                  <NumButton imgSrc={sSrc}>2</NumButton>
                  <NumButton imgSrc={sSrc}>3</NumButton>
                </div>    
              
              <div className={cl.row}>
                  <NumButton imgSrc={sSrc}>4</NumButton>
                  <NumButton imgSrc={sSrc}>5</NumButton>
                  <NumButton imgSrc={sSrc}>6</NumButton>
              </div>
              <div className={cl.row}>
                  <NumButton imgSrc={sSrc}>7</NumButton>
                  <NumButton imgSrc={sSrc}>8</NumButton>
                  <NumButton imgSrc={sSrc}>9</NumButton>
              </div>
              <div className={cl.row}>
                  <NumButton imgSrc={sSrc}>C</NumButton>
                  <NumButton imgSrc={sSrc}>0</NumButton>
                  <NumButton imgSrc={sSrc}>↩</NumButton>
              </div>
            </div>  
          </div>
              

          <div className={cl.info}>
              <span>SquareRoot can calculate the following types of roots:</span> 
              <div className={cl.infoRow}>
                <div className={cl.infoBox}><img src={arSrc} alt="" /></div>
                <div className={cl.infoBox}><img src={loSrc} alt="" /></div>
              </div>

              <div className={cl.infoRow}>
                  <div className={cl.infoBox}><img src={loSrc} alt="" /></div>
                  <div className={cl.infoBox}><img src={coSrc} alt="" /></div>
               </div> 
          </div>     
              
            

           <Footer/> 
        </div>

        
     
       
      
    </div>  
    )
}

export default MainPage;







