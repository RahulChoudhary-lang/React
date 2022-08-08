// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextFrom';
// import About from './Components/About';

function App() {
  const[mode, setMode] = useState("dark");
  const[text, setText] = useState("Enable Darkmode");
 
  const toggleMode = () => {
    if(mode === "dark" && text === "Enable Darkmode"){
      setMode("light");
      setText("Enable Lightmode");
      document.body.style.backgroundColor="white";
    }else{
      setMode("dark");
      setText("Enable Darkmode");
      document.body.style.backgroundColor="#2b5087";
    }
  }

  return (
    <>
      <Navbar title="React App" mode={mode} text={text} toggleMode={toggleMode} />

      {/* <Navbar /> */}
      
      <div className='container mp-3'>
        <TextForm heading="Enter Text" mode={mode}/>
      </div>

      {/* <div className='container mp-3'>
        <About/>
      </div> */}
    </>
  );
}

export default App;
