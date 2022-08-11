// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextFrom';
import About from './Components/About';
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Darkmode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      messages: message,
      types: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "dark" && text === "Enable Darkmode") {
      setMode("light");
      setText("Enable Lightmode");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode Enabled!", "success");
    } else {
      setMode("dark");
      setText("Enable Darkmode");
      document.body.style.backgroundColor = "#2b5087";
      showAlert("Darkmode Enabled!", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="React App" mode={mode} text={text} toggleMode={toggleMode} />

        {/* <Navbar /> */}

        <Alert alert={alert} />

        <div>
          <Switch>
            {/* Here we use exact for exact path location */}
            <Route exact path="/about">
              <div className='container mp-3'>
                <About />
              </div>
            </Route>

            <Route exact path="/">
              <div className='container mp-3'>
                <TextForm heading="Enter Text" mode={mode} showAlert={showAlert} />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
