import { useState } from 'react';
// import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextFrom from './Component/TextFrom';

function App() {

  const [mode,setMode] = useState('light') //Whether dark mode is enbled or not
  const [toggleText, setToggleText] = useState("Enable dark mode")

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a0c3c'
      setToggleText("Disable dark mode")  
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      setToggleText("Enable dark mode")
    }
  }

  return (
    <>

      <Navbar title="TextUtils" aboutText='About Us' mode={mode} toggleText={toggleText} toggleMode={toggleMode} />
      <div className="container my-3" >
        <TextFrom heading="Enter the text to analyze below" />
        <About />
      </div>

    </>

  );
}

export default App;
