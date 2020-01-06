//User logins to come back and play the game again

import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
const Login = props => {
  const [note, setNote] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth().post('/auth/login', note)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token) 
      props.history.push('/Scores')
    })
    .catch(error => {
      console.log(error)
    })
    // props.addNewNote(note);
    // setNote({
    //   name: '',
    //   password: ''
    // });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name:</label>
      <input
        id='username'
        type='text'
        name='username'
        value={note.username}
        onChange={handleChanges}
      />

      <label htmlFor='password'>Password:</label>
      <input
        id='password'
        type='password'
        name='password'
        value={note.password}
        onChange={handleChanges}
      />

      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
