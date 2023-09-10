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
import Src1 from "../../../images/1.png"
import Src2 from "../../../images/2.png"
import Src3 from "../../../images/3.png"
import Src4 from "../../../images/4.png"
import Src5 from "../../../images/5.png"
import Src6 from "../../../images/6.png"
import Src7 from "../../../images/7.png"
import Src8 from "../../../images/8.png"
import Src9 from "../../../images/9.png"
import Src0 from "../../../images/0.png"
import Srcb from "../../../images/b.png"
import Srcc from "../../../images/c.png"
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

    const printNum = (sym) => {
      setNum(num + sym);
    }

    const clearNum = (sym) => {
      setNum("");
    }

    const backNum = (sym) => {
      setNum(num.toString().slice(0,-1))
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
                  <NumButton imgSrc={Src1} printNum={printNum}>1</NumButton>  
                  <NumButton imgSrc={Src2} printNum={printNum}>2</NumButton>
                  <NumButton imgSrc={Src3} printNum={printNum}>3</NumButton>
                </div>    
              
              <div className={cl.row}>
                  <NumButton imgSrc={Src4} printNum={printNum}>4</NumButton>
                  <NumButton imgSrc={Src5} printNum={printNum}>5</NumButton>
                  <NumButton imgSrc={Src6} printNum={printNum}>6</NumButton>
              </div>
              <div className={cl.row}>
                  <NumButton imgSrc={Src7} printNum={printNum}>7</NumButton>
                  <NumButton imgSrc={Src8} printNum={printNum}>8</NumButton>
                  <NumButton imgSrc={Src9} printNum={printNum}>9</NumButton>
              </div>
              <div className={cl.row}>
                  <NumButton imgSrc={Srcc} printNum={clearNum}>C</NumButton>
                  <NumButton imgSrc={Src0} printNum={printNum}>0</NumButton>
                  <NumButton imgSrc={Srcb} printNum={backNum}>↩</NumButton>
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







