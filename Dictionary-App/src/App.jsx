import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
// import React from 'react'
import Dictionary from './components/Dictionary/Dictionary'
import Quotes from './components/Quotes/Quotes'


// const myStyle = {
//   backgroundImage:"url('./assets/dicbg.jpeg')",
//   height:"100vh",
//   marginTop:"-70px",
//   fontSize:"40px",
//   backgroundSize:"cover",
//   backgroundRepeat:"no-repeat",
// };
function App() {
  return (
    <div className=' box '
    //  style={myStyle}
    >

    <Dictionary/>
    <hr />
    <br />
    <Quotes/>

    </div>
  )
}

export default App