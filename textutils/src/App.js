import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
// import TextFrom from './Component/TextFrom';
import TextFrom2 from './Component/TextFrom2';

function App() {

  const [mode,setMode] = useState('light') //Whether dark mode is enbled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a0c3c'
      
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>

      <Navbar title="TextUtils" aboutText='About Us' mode={mode} toggleMode={toggleMode} />

      <div className="container my-3" >
        {/* <TextFrom heading="Enter the text to analyze below" /> */}
        <TextFrom2 heading="Enter the text to analyze below" />
        <About />
      </div>

    </>

  );
}

export default App;
