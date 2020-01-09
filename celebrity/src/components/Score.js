//Aggregates {Score}
import React,{useState}from 'react'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'
const Score = (props) => {
    const token = localStorage.getItem("token")
const [postScore, setPostScore] = useState({  score: Number, user_id: Number, time: Number, token: token})


  const onChange = e => {
    setPostScore({ ...postScore, [e.target.name]: e.target.value });
  };

  const signOut = () => {
    localStorage.clear('token');
    props.history.push('/login');
  };

 const submitScore = (e) => {
     e.preventDefault();
     console.log(postScore)
     axiosWithAuth().post(`/users/scores`, postScore)
     .then(res => {
         console.log(res)
     })
     .catch(error => {
         console.log(error)
     })
 }


  return (
    <div>
      <button type='submit' onClick={signOut}>
        Sign Out
      </button>
      <h2>Hello: {props.username}, please submit your score </h2>
      <form onSubmit={submitScore}>
        {/* <input type ='number' name='id' placeholder='id' value={postScore.id} onChange={onChange}/> */}
        <input
          type='text'
          name='score'
          placeholder='score'
          value={postScore.score}
          onChange={onChange}
        />
        <input
          type='text'
          name='user_id'
          placeholder='user id'
          value={postScore.user_id}
          onChange={onChange}
        />
        <input
          type='text'
          name='time'
          placeholder='time'
          value={postScore.time}
          onChange={onChange}
        />
        <button>Submit Score</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => (

    {
      userState: state.userState
    }
   
)

export default connect(mapStateToProps, null)(Score);