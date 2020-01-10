import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <Jumbotron className='jumbotron'>
        <h1 className='display-3'>
          Hello Welcome To Celebrity Dead or Alive Game
        </h1>
        <h2 className='landing-text'>
          This is a simple celebrity factoid quiz.
        </h2>
        <hr className='my-2' />
        <p className='landing-text'>
          You will have 10 random questions regarding celebrities, you must
          answer if they are dead or alive. As you answer the questions points
          will accumulate. At the end you will have the opportunity to log in
          and register you results. Best of luck!!
        </p>
        <p className='lead'>
          <Link to='/Game' className='btn btn-primary mainButton'>
            PLAY GAME
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default LandingPage;
