import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email:"",password:""})

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({email:credentials.email, password:credentials.password})
          });
          const json = await response.json();
      console.log(json)

      if(json.success){
        //Save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Successfully Login","success")
        navigate('/')
      }
      else{
        props.showAlert("Invalid credentials!","danger");
      }
        }
        
        
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
}

  return (
    <div className='container mt-4 p-4 rounded border border-secondary '>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input onChange={onChange} type="email" className="form-control" value={credentials.email} id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input onChange={onChange} type="password" className="form-control" value={credentials.password} id="password" name="password" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-dark my-2 " >Login</button>
</form>
    </div>
  )
}

export default Login
