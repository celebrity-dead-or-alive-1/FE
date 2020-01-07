import React, { useState } from 'react';
import { connect } from 'react-redux'
import { userLogin } from '../actions/actions'
import useForm from './useLoginForm';
import  validateLogin  from './validateLogin'

const Login = props => {
  
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validateLogin)


 function submit() {
   console.log('Submitted Succesfully')
  props.userLogin(values)
  props.history.push('/Scores')

 }


 

 

  // console.log(props.username)
  return (
    <>
     <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        id='username'
        type='text'
        name='username'
        className={`${errors.username && "inputError"}`}
        value={values.username}
        onChange={handleChange}
      />
       {errors.username && <p className="error">{errors.username}
       </p>}
      <label htmlFor='password'>Password:</label>
      <input
        id='password'
        type='password'
        name='password'
        className={`${errors.password && "inputError"}`}
        value={values.password}
        onChange={handleChange}
      />
     {errors.password && <p className="error">{errors.password}</p>}
      <button type='submit'>Login</button>
    </form> 
    </>

  );
};

// const mapStateToProps = state => (
//   {
//     username: state.username, 
//     isFetching: state.isFetching
  
//   }

export default connect(null, {userLogin})(Login);