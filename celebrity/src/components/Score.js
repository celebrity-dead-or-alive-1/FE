//Aggregates {Score}
import React,{useState}from 'react'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'
const Score = (props) => {
    // const token = localStorage.getItem("token")
const [postScore, setPostScore] = useState({  
    "score": "", 
    "user_id": props.userState.id, 
    "time": "", 
    })


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
     axiosWithAuth().post(`/users/score`, postScore)
     .then(res => {
         console.log(res)
         props.history.push('/User')
     })
     .catch(error => {
         console.log(error)
     })
 }


console.log(props.userState)
console.log(props.userState.id)
  return (
    <div>
      <button type='submit' onClick={signOut}>
        Sign Out
      </button>
      {props.userState.id === 0 ? <h1>Loading...</h1> : 
      
      <div>
      <h2>Hello: {props.userState.username}, please submit your score </h2>
      <form onSubmit={submitScore}>
        {/* <input type ='number' name='id' placeholder='id' value={postScore.id} onChange={onChange}/> */}
        <input
          type='number'
          name='score'
          placeholder='score'
          value={postScore.score}
          onChange={onChange}
        />
        <input
          name='user_id'
          placeholder='user id'
          value={postScore.user_id}
          onChange={onChange}
        />
        <input
          type='number'
          name='time'
          placeholder='time'
          value={postScore.time}
          onChange={onChange}
        />
        <button>Submit Score</button>
      </form>
      </div>} 
      
    </div>
  );
};


 

 
const mapStateToProps = state => (

    {
      userState: state.userState
    }
   
)

export default connect(mapStateToProps, null)(Score);