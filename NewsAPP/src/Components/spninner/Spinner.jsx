import React from 'react'
import loading from './Spinner@1.gif'
import './spinner.css'

function Spinner() {
  return (
    <div>
      <div className=' text-center '>
        <img src={loading} alt="" />
        <span className="loader text-white ">Loading</span>
      </div>
    </div>
  )
}

export default Spinner
