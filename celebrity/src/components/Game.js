import PersonCard from './Card';
import MyTimer from './Timer';
import Button from './Button';
import { Container } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

  const right = () => {

  }

  const isAlive = boolean => {
    if (boolean === true) {
      setScore(score + 1);
      
    }
  };

  const isDead = boolean => {
    if (boolean === false) {
      setScore(score + 1);
    }
  };

  return (
    <div className='celeb-list'>
      <MyTimer />
      <h2>Score: {score}</h2>
      <Container>
        {celeb.map(celeb => (
          <div>
            <PersonCard
              celeb={celeb}
              key={celeb.id}
              image_url={celeb.image_url}
              name={celeb.celebname}
              factoid={celeb.factoid}
              birthyear={celeb.birthyear}
            />
            {/* <Button value='false' text='Dead' check={celeb.alive} />
            <Button value='true' text='Alive' check={celeb.alive} /> */}
            <button className="mainButton" onClick={() => isDead(celeb.alive)}>Dead</button>
            <button className="mainButton" onClick={() => isAlive(celeb.alive)}>Alive</button>
          </div>
        ))}
      </Container>
    </div>
  );
};



// //Renders game component to start quiz
// //import Card.js
// // import Button.js
// // using end points
// //Axios call

// import PersonCard from './Card';
// import MyTimer from './Timer';
// import Button from './Button';
// import { Container } from 'reactstrap';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Game = () => {
//   const [celeb, setCeleb] = useState([]);
//   useEffect(() => {
//     const getCeleb = () => {
//       axios
//         .get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb')
//         .then(response => {
//           console.log(response);
//           setCeleb(response.data);
//         })
//         .catch(error => {
//           console.error('Server Error', error);
//         });
//     };

//     getCeleb();
//   }, []);

//   return (
//     <div className='celeb-list'>
//       <MyTimer />
//       <Container>
//         {celeb.map(celeb => (
//           <PersonCard
//             celeb={celeb}
//             key={celeb.id}
//             image_url={celeb.image_url}
//             name={celeb.celebname}
//             factoid={celeb.factoid}
//             birthyear={celeb.birthyear}
//           />
//         ))}
//       </Container>
//       <Button value='false' text='Dead' check={celeb.alive} />
//       <Button value='true' text='Alive' check={celeb.alive} />
//     </div>
//   );
// };
export default Game;
