import { useState } from 'react';
// import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextFrom from './Component/TextFrom';
import Alert from './Component/Alert';

function App() {

  const [mode, setMode] = useState('light') //Whether dark mode is enbled or not
  const [toggleText, setToggleText] = useState("Enable dark mode")
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setTimeout(() => {
      setAlert({
        msg: message,
        type: type
      })

    }, 300);
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a0c3c'
      setToggleText("Disable dark mode")
      showAlert("Dark Mode has been enable!", "success")
      document.title = "TextUtils - DarkMode"
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode '
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now.'
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      setToggleText("Enable dark mode")
      showAlert("Light Mode has been enable!", "success")
      document.title = "TextUtils - LightMode"
    }
  }

  return (
    <>

      <Navbar title="TextUtils" aboutText='About Us' mode={mode} toggleText={toggleText} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>

    </>

  );
}

export default App;
