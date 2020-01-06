//User logins to come back and play the game again

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = props => {
  const [form, setForm] = useState({
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
    props.addNewNote(form);
    setForm({
      username: '',
      password: ''
    });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name:</label>
      <input
        id='username'
        type='text'
        name='username'
        value={form.username}
        onChange={handleChanges}
      />

      <label htmlFor='password'>Password:</label>
      <input
        id='password'
        type='text'
        name='password'
        value={form.password}
        onChange={handleChanges}
      />

      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
