import React, { useState } from 'react';
import { connect } from 'react-redux'
import { userLogin } from '../actions/actions'
const Login = props => {
  const [note, setNote] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
    
  };

  const submitForm = e => {
    e.preventDefault();
    props.userLogin(note)
    props.history.push('/Scores')
    
  };

  console.log(props.username)
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

const mapStateToProps = state => (
  {username: state.username}
)
export default connect(mapStateToProps, {userLogin})(Login);