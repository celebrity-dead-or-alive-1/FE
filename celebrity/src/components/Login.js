//User logins to come back and play the game again

import React, { useState } from 'react';

const Login = props => {
  const [note, setNote] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChanges = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({
      name: '',
      email: '',
      password: ''
    });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name:</label>
      <input
        id='name'
        type='text'
        name='name'
        value={note.name}
        onChange={handleChanges}
      />

      <label htmlFor='email'>Email:</label>
      <input
        id='email'
        type='text'
        name='email'
        value={note.email}
        onChange={handleChanges}
      />

      <label htmlFor='password'>Password:</label>
      <input
        id='password'
        type='text'
        name='password'
        value={note.password}
        onChange={handleChanges}
      />

      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
