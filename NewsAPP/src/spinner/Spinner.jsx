import loading from './Internet.gif'
import './spinner.css'

const Spinner = ()=>{
 
    return (
      <div className=' text-center '>
        <img src={loading} alt="" className=' rounded-full rounded-circle  mx-2' />
        <span className="loader">Loading</span>
      </div>
    )
}


export default Spinner