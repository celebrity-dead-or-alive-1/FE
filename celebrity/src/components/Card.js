import { Card, CardBody, CardSubtitle, CardImg, Button } from 'reactstrap';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

const PersonCard = props => {
  const [cardState, setCardState] = useState('CelebImage');
  const [buttonState, setButtonState] = useState('');

  useEffect(() => {
    console.log('state changed');
  }, [cardState, buttonState]);

  const isAlive = boolean => {
    setButtonState('nobutton');
    if (boolean === true) {
      props.setScore(props.score + 1);
      setCardState('CelebImage cardcorrect');
      return;
    }
    setCardState('CelebImage cardincorrect');
  };

  const isDead = boolean => {
    setButtonState('nobutton');
    if (boolean === false) {
      props.setScore(props.score + 1);
      setCardState('CelebImage cardcorrect');
      return;
    }
    setCardState('CelebImage cardincorrect');
  };

  return (
    <Card className='card'>
      <CardBody className='card-body' key={props.id}>
        <CardImg className={cardState} src={props.image_url}></CardImg>
        <br></br> <br></br>
        <CardSubtitle>Name: {props.name}</CardSubtitle>
        <br></br>
        <CardSubtitle>Factoid: {props.factoid}</CardSubtitle>
        <br></br>
        <CardSubtitle>BirthYear: {props.birthyear}</CardSubtitle>
        <br></br>
      </CardBody>
      <Button className={buttonState} onClick={() => isDead(props.celeb.alive)}>
        Dead
      </Button>
      <Button
        className={buttonState}
        onClick={() => isAlive(props.celeb.alive)}
      >
        Alive
      </Button>
    </Card>
  );
};

export default PersonCard;
