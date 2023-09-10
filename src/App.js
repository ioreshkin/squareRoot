import React, {useState} from "react";
import MainPage from "./components/pages/mainPage";
import "./reset.css"

function App() {

  
  

//TODO не давать вводить буквы и хуйню onChange ВОЗМОЖНО. num обрезать пробелы по бокам
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
