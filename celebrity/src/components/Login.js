//User logins to come back and play the game again

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = props => {
  const [form, setForm] = useState({
=======
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
const Login = props => {
  const [note, setNote] = useState({
>>>>>>> ee2d6f4cb469216421eda5040c728d0a67cd536e
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  useEffect(() => {
    axios
      .get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb/')
      .then(response => {
        setForm(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });
  }, []);

  const submitForm = e => {
    e.preventDefault();
<<<<<<< HEAD
    props.addNewNote(form);
    setForm({
      username: '',
      password: ''
    });
=======
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
>>>>>>> ee2d6f4cb469216421eda5040c728d0a67cd536e
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name:</label>
      <input
        id='username'
        type='text'
        name='username'
<<<<<<< HEAD
        value={form.username}
=======
        value={note.username}
>>>>>>> ee2d6f4cb469216421eda5040c728d0a67cd536e
        onChange={handleChanges}
      />

      <label htmlFor='password'>Password:</label>
      <input
        id='password'
        type='password'
        name='password'
        value={form.password}
        onChange={handleChanges}
      />

      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
