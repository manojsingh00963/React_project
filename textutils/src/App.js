import './App.css';
import Navbar from './Component/Navbar';
import TextFrom from './Component/TextFrom';

function App() {
  return (
    <>

      <Navbar title="TextUtils" aboutText='About Us' />

      <div className="container my-3" >
        <TextFrom heading="Enter the text to analyze below" />
      </div>

    </>

  );
}

export default App;
