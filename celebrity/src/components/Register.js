// User registers/signs up then login
import React,{useState} from 'react'
import axios from 'axios'
const Register = props => {
    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        email: ''

    })

  const changeHandler = e => {
      setRegisterForm({...registerForm, [e.target.name]: e.target.value})
  }

 const submitRegistration = e => {
     e.preventDefault();
     console.log(registerForm);
     axios.post('https://ogr-ft-celebdoa.herokuapp.com/api/auth/register', registerForm)
     .then( res => {
         console.log(res)
     })
     .catch(error => {
         console.log(error)
     })

 }

  return (
      <div>
          <form onSubmit={submitRegistration}>
              <input type ='text' name='username' value={registerForm.username} onChange={changeHandler}/>
              <input type ='password' name='password' value={registerForm.password} onChange={changeHandler}/>
              <input type ='email' name='email' value={registerForm.email} onChange={changeHandler}/>
              <button type='submit'>Sign Up</button>
          </form>
      </div>
  )

}

export default Register 
