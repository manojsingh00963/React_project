import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { Navbar } from 'reactstrap';
import Dictionary from './components/Dictionary/Dictionary'
import Quotes from './components/Quotes/Quotes'

function App() {
  return (
    <div>
    {/* <Navbar/> */}
    <Dictionary/>
    <Quotes/>

    </div>
  )
}

export default App