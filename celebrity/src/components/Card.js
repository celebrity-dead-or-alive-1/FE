import { Card, CardBody, CardSubtitle, CardImg } from 'reactstrap';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

const PersonCard = props => {
  return (
    <Card className='card'>
      <CardBody className='card-body' key={props.id}>
        <CardSubtitle>Name: {props.name}</CardSubtitle>
        <CardImg src={props.image_url}></CardImg>
        <CardSubtitle>Factoid: {props.factoid}</CardSubtitle>
        <CardSubtitle>BirthYear: {props.birthyear}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default PersonCard;
