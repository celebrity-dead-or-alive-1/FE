import PersonCard from './Card';
import MyTimer from './Timer';
import Button from './Button';
import { Container } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Game = () => {
  const [score, setScore] = useState(0);
  const [celeb, setCeleb] = useState([]);
  const [celebCount, setCelebCount] = useState(0);
  const [celebArray, setCelebArray] = useState([]);
  useEffect(() => {
    const getCeleb = () => {
      axios
        .get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb')
        .then(response => {
          console.log(response);
          setCeleb(response.data);
          setCelebArray(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };
    getCeleb();
  }, []);

  const celebLength = celeb.length - 1;
  return (
    <div className='celeb-list'>
      <br></br>
      <MyTimer />
      <br></br>
      <Container>
        {celeb.map(celeb => (
          <div>
            <PersonCard
              celebArray={celebArray}
              celebCount={celebCount}
              setCelebCount={setCelebCount}
              setScore={setScore}
              score={score}
              celeb={celeb}
              key={celeb.id}
              image_url={celeb.image_url}
              name={celeb.celebname}
              factoid={celeb.factoid}
              birthyear={celeb.birthyear}
            />
         </div>
        ))}
      </Container>
    </div>
  );
};

export default Game;