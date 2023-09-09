import React, {useState} from "react";
import SupportFormButton from "./components/buttons/supportFormButton";
import LangSelector from "./components/langSelector/langSelector";
import Info from "./components/info/info";
import { bignumber, complex, forEach, format, nthRoot, sqrt } from "mathjs";

function App() {

  const [lang, setLang] = useState("ru")

  const [num, setNum] = useState(0)

  const [deg, setDeg] = useState(2)

  const [sym, setSym] = useState(5)

  const [ans, setAns] = useState()
  


  const switchLang = (newLang) => {
    setLang(newLang);
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

    if (num === '0') {
      curAns = 0
    }



    if (num < 0) {
      
      if (deg % 2 != 0) {
        curAns = nthRoot(num,deg).toString();
      } else if (deg == 2) {
        curAns = sqrt(num).toString();
      } else {
        console.log("else")
        errorText= "Значение не определено(только из второй и нечетных степеней)";
      }
    }

    if (num.toString().indexOf("i") != -1) {
      let a = curAns.slice(0, num.toString().indexOf("i"));
      // TODO обрезать по бокам b и a
      let b = 1;
    }
   

    let tempArr = [];

    

    if (curAns[0] == "±") {
      tempArr.push("±");
      curAns = curAns.slice(2)

    }

    if (curAns[curAns.length-1] === "i") {

      
      tempArr.push("i");
      curAns.slice(0, -1)

    }

    
    
    if (errorText == "") {
      if (sym === '0') {

        curAns = bignumber(Math.round(curAns.toString()))  
        
      } else { 
        console.log(sqrt("i").toString())
        console.log(curAns[curAns.length-1])

        if (curAns[curAns.length-1] == "i") {
          curAns = format(complex(curAns), sym+1);
        } else {
          curAns = format(bignumber(curAns), sym);
        }

        
        
      }
    }




    // tempArr.forEach(e => {
    //   if (e === "±") {
    //     curAns = "± " + curAns; 
    //   }
    //   if (e === "i") {
    //     curAns = curAns + "i"; 
    //   }
    // });

    setAns(curAns);


    // let curAns;
    // if (deg === 0) {
    //   if (num === 0) {
    //     setAns("Ошибка")
    //   } else {
    //     setAns(1)
    //   }
    // } else {
    //   if (num < 0 && deg % 2 === 1)
    //     curAns = -Math.pow(-num, 1/deg);
    //   else
    //     curAns = bignumber(4)

    //   console.log(curAns.toString)
      
    // if (sym === 0) {
    //   curAns = Math.round(curAns)
    // } else {
    //   curAns = curAns.toFixed(sym)
    // }
    // while (curAns[curAns.length-1] == 0) {
    //     curAns = curAns.slice(0, -1)
    // }

    // if (curAns[curAns.length-1] === ".") {
    //   curAns = curAns.slice(0, -1)
    // }
    // setAns(curAns)
    // } 
    
  }
  

//TODO не давать вводить буквы и хуйню onChange ВОЗМОЖНО. num обрезать пробелы по бокам
  return (
    <div className="App">
      <Info lang = {lang}/>
      <LangSelector lang={lang} setLang={switchLang}/>     
      <input type="text" onChange={event => setNum(event.target.value)} placeholder="0" value={num}></input>
      <input type="number" onChange={event => setDeg(event.target.value)} placeholder="2"></input>
      <input type="number" onChange={event => setSym(event.target.value)} placeholder="5"></input>
      <button onClick={() => {setNum(num + "i");console.log(num)}}>i</button>
      
      <button onClick={() => calculate(num)}>Посчитать</button>
      <span>ответ: {ans}</span>
    </div>
  );
}

export default App;
