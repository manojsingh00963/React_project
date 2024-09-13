import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'



export default function Navbar(props) {

// const [Color, setColor] = useState('white')
// const [bgtext, setBgtext] = useState('Pick one for change new backgroundColor.')
 
    // document.body.style.backgroundColor = Color

    // setTimeout(() => {
    //   setBgtext('')
    // },10 * 1000);
    
  return (

    /* <nav className="navbar navbar-expand-lg bg-body-tertiary "> */
    /* removed-classes , -> bg-gradient bg-gradient border border-2 border-top-0 */
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}>
      <div className="container-fluid">
        <a className="navbar-brand" to="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="/">Home</a>
            </li>
           </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button cla
        ssName="btn btn-outline-secondary" type="submit">Search</button>
      </form> */}

          {/* //color choose btton */}
{/* 
          <div className='d-flex' >
          <span className={` fs-6  `} style={{color: props.mode ==='dark'?'white':'black'}} >
          {bgtext}
          </span>
            <div style={{backgroundColor:'#00d4ff',border:'2px grove #c3d1c6', margin:'0px 5px' , width:"5vh",height:"5vh"}} className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." onClick={ ()=>setColor('#00d4ff')} />
            <div style={{backgroundColor:'#a120f3',border:'2px grove #c3d1c6', margin:'0px 5px' , width:"5vh",height:"5vh"}} className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." onClick={ ()=>setColor('#a120f3')} />
            <div style={{backgroundColor:'#86bcbf',border:'2px grove #c3d1c6', margin:'0px 5px' , width:"5vh",height:"5vh"}} className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." onClick={ ()=>setColor('#86bcbf')} />
            <div style={{backgroundColor:'#554d6b',border:'2px grove #c3d1c6', margin:'0px 10px 0px 5px' , width:"5vh",height:"5vh"}} className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." onClick={ ()=>setColor('#554d6b')} />
            <div style={{backgroundColor:'#ffffff',border:'2px grove #c3d1c6', margin:'0px 10px 0px 5px' , width:"5vh",height:"5vh"}} className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." onClick={ ()=>setColor('#ffffff')} />
           </div> */}

{/* //solved exciese. */}
<div className='d-flex'>
  <div className='bg-primary rounded-circle mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid black'}} onClick={()=>{props.toggleMode('primary')}} ></div>
  <div className='bg-success rounded-circle mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid white'}} onClick={()=>{props.toggleMode('success')}} ></div>
  <div className='bg-danger rounded-circle mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid black'}} onClick={()=>{props.toggleMode('danger')}} ></div>
  <div className='bg-warning rounded-circle mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid white'}} onClick={()=>{props.toggleMode('warning')}} ></div>
  <div className='bg-info rounded-circle mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid black'}} onClick={()=>{props.toggleMode('info')}} ></div>
  <div className='bg-light rounded-circle mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid black'}} onClick={()=>{props.toggleMode('light')}} ></div>
  <div className='bg-dark rounded-circle mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid white'}} onClick={()=>{props.toggleMode('dark')}} ></div>
</div>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}


//Default Properties. 

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About',
}