import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserScore = props => {
  const [userScore, setUserScore] = useState();

  console.log(props.userState.username);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/score/${props.userState.id}`)
      .then(res => {
        console.log(res);
        setUserScore(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      
      <br></br>
      <br></br>
      <h1> Welcome Your Scores are:</h1>

      {userScore === undefined ? (
        <h1>Loading Scores...</h1>
      ) : (
        userScore.map(score => <h2>{score.score}</h2>)
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  userState: state.userState
});

export default connect(mapStateToProps, null)(UserScore);
