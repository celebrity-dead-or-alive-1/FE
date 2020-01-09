import PersonCard from './Card';
import MyTimer from './Timer';
import Button from './Button';
import { Container } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardImg } from 'reactstrap';

const Game = () => {
  const [score, setScore] = useState(0);
  const [celeb, setCeleb] = useState([]);
  useEffect(() => {
    const getCeleb = () => {
      axios
        .get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb')
        .then(response => {
          console.log(response);
          setCeleb(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };

    getCeleb();
  }, []);

  // const isAlive = boolean => {
  //   if (boolean === true) {
  //     setScore(score + 1);
  //     alert('Correct');
  //     return;
  //   }
  // };

  // const isDead = boolean => {
  //   if (boolean === false) {
  //     setScore(score + 1);
  //     alert('Correct');
  //   }
  // };

  return (
    <div className='celeb-list'>
      <br></br>
      <MyTimer />
      <br></br>
      <h1>You Scored {score}</h1>
      <Container>
        {celeb.map(celeb => (
          <div>
            <PersonCard
              setScore={setScore}
              score={score}
              celeb={celeb}
              key={celeb.id}
              image_url={celeb.image_url}
              name={celeb.celebname}
              factoid={celeb.factoid}
              birthyear={celeb.birthyear}
            />
            {/* <Button value='false' text='Dead' check={celeb.alive} />
            <Button value='true' text='Alive' check={celeb.alive} /> */}
            {/* <button onClick={() => isDead(celeb.alive)}>Dead</button>
            <button onClick={() => isAlive(celeb.alive)}>Alive</button> */}
          </div>
        ))}
      </Container>
    </div>
  );
};
export default Game;
