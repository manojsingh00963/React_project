import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import
import { Home, About, Header, Signup, Login, Alert } from './components';
import NoteState from './context/NoteState'

function App() {
  
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <BrowserRouter>
    <NoteState>
      <Header />
      <Alert alert={alert} />
      <div className="container">

      <Routes>
        <Route path="/" element={<Home showAlert={showAlert} />} /> {/* Fixed this line */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login showAlert={showAlert} />} />
        <Route path="/signup" element={<Signup showAlert={showAlert} />} />
      </Routes>
      </div>
    </NoteState>
    </BrowserRouter>
  );
}

export default App;
