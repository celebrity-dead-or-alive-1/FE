import { Card, CardBody, CardSubtitle, CardImg, Button } from 'reactstrap';

import React, { useEffect, useState } from 'react';
import { useHistory, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

const PersonCard = props => {
  const [cardState, setCardState] = useState('CelebImage');
  const [buttonState, setButtonState] = useState('');
  const [displayPop, setDisplayPop] = useState(false);
  useEffect(() => {
    console.log('state changed');
  }, [cardState, buttonState, displayPop]);

  const isAlive = boolean => {
    setButtonState('nobutton');
    props.setCelebCount(props.celebCount + 1);
    console.log(props.celebCount);
    if (props.celebArray.length - 1 === props.celebCount) {
      setDisplayPop(!displayPop);
      // console.log('list of celeb');
      return;
    }
    if (boolean === true) {
      props.setScore(props.score + 1);
      setCardState('CelebImage cardcorrect');
      return;
    }
    setCardState('CelebImage cardincorrect');
  };

  const isDead = boolean => {
    setButtonState('nobutton');
    props.setCelebCount(props.celebCount + 1);
    console.log(props.celebCount);
    if (props.celebArray.length - 1 === props.celebCount) {
      setDisplayPop(!displayPop);
      return;
    }
    if (boolean === false) {
      props.setScore(props.score + 1);
      setCardState('CelebImage cardcorrect');
      return;
    }
    setCardState('CelebImage cardincorrect');
  };
  console.log(props.celebArray.length);

  const { push } = useHistory();
  const registerGame = () => {
    push('/Register');
  };
  const login = () => {
    push('/Login');
  };
  console.log(props.history);
  return (
    <Card className='card'>
      <CardBody className='celeb-all-card' key={props.id}>
        <CardImg className={cardState} src={props.image_url}></CardImg>
        <br></br> <br></br>
        <CardSubtitle>Name: {props.name}</CardSubtitle>
        <br></br>
        <CardSubtitle>Factoid: {props.factoid}</CardSubtitle>
        <br></br>
        <CardSubtitle>BirthYear: {props.birthyear}</CardSubtitle>
        <br></br>
      </CardBody>
      <Button
        className='mainButton btn-1'
        className={buttonState}
        onClick={() => isDead(props.celeb.alive)}
      >
        Dead
      </Button>
      <Button
        className='mainButton btn-2 '
        className={buttonState}
        onClick={() => isAlive(props.celeb.alive)}
      >
        Alive
      </Button>

      {displayPop ? (
        <div className='testpopup '>
          <div className='testpopup_inner'>
            <p className='popuptext'>
              Congratulations You Scored: <br /> {props.score} out of{' '}
              {props.celebArray.length - 1}
            </p>
            <button onClick={registerGame}>
              Register Score: {props.score}
            </button>
            <button onClick={login}>Login</button>
          </div>
        </div>
      ) : null}
      {/* <h2>TEST</h2> */}
    </Card>
  );
};

export default PersonCard;
