// User registers/signs up then login

import React,{useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import useForm from './useLoginForm';
import  validateLogin  from './validateLogin'

const Register = props => {
    
    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateLogin)



  function submit(){
     console.log(values)
    //  console.log(registerForm);
     axiosWithAuth().post('/auth/register', values)
     .then( res => {
         console.log(res)
         props.history.push('/Login')
     })
     .catch(error => {
         console.log(error)
     })

 }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type ='text' 
              placeholder ='username'
               name='username' 
               value={values.username} 
               onChange={handleChange} 
               className={`${errors.username && "inputError"}`} />
              
              {errors.username && <p className="error">{errors.username}</p>}
              
              <input type ='password' 
              placeholder ='password' 
              name='password' 
              value={values.password} 
              onChange={handleChange}
              className={`${errors.password && "inputError"}`} 
              />
       {errors.password && <p className="error">{errors.password}</p>}
              
              
              <input type ='email'  
              placeholder ='email' 
              name='email' 
              value={values.email} 
              onChange={handleChange}
              className={`${errors.email && "inputError"}`} 
              />
            
            {errors.email && <p className="error">{errors.email}</p>}
              
              
              <button type='submit'>Sign Up</button>
          </form>
      </div>
  )

}

export default Register;