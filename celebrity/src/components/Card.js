import { Card, CardBody, CardSubtitle, CardImg } from 'reactstrap';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

const PersonCard = props => {
  return (
    <Card className='card'>
      <CardBody className='card-body' key={props.id}>
        <CardImg src={props.image_url}></CardImg>
        <br></br> <br></br>
        <CardSubtitle>Name: {props.name}</CardSubtitle>
        <br></br>
        <CardSubtitle>Factoid: {props.factoid}</CardSubtitle>
        <br></br>
        <CardSubtitle>BirthYear: {props.birthyear}</CardSubtitle>
        <br></br>
      </CardBody>
    </Card>
  );
};

export default PersonCard;

