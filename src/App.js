import React, {useState} from "react";
import MainPage from "./components/pages/mainPage/mainPage";
import "./reset.css"
import DocsPage from "./components/pages/docsPage/docsPage";
import AbtPage from "./components/pages/abtPage/abtPage";

function App() {

  
  

//TODO не давать вводить буквы и хуйню onChange ВОЗМОЖНО. num обрезать пробелы по бокам
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
