import { useState } from 'react';
// import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextFrom from './Component/TextFrom';
import Alert from './Component/Alert';

function App() {

  const [mode, setMode] = useState('light') //Whether dark mode is enbled or not
  // const [toggleText, setToggleText] = useState("Enable dark mode")
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

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) => {
    removeBodyClasses()
      document.body.classList.add('bg-' + cls) 
      if (mode === 'light') {
        setMode('dark');
        // setToggleText("Disable dark mode")
      // document.body.style.backgroundColor = '#0a0c3c'
      showAlert("Dark Mode has been enable!", "success")
      document.title = "TextUtils - DarkMode"
     
    }
    else {
      setMode('light');
      // setToggleText("Enable dark mode")
      // document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enable!", "success")
      document.title = "TextUtils - LightMode"
    }
  }
  
  return (
    <>
        {/* <Navbar title="TextUtils" aboutText='About Us' mode={mode} toggleText={toggleText} */}
        <Navbar title="TextUtils" aboutText='About Us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
           <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>

    </>

  );
}

export default App;
