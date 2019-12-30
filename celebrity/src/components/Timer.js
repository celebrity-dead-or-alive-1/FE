//Sets timer to 20's and adjust
//for difficulty level on stretch
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(20);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 2000);
    } else if (!isActive && seconds !== 20) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className='app'>
      <div className='time'>{seconds} seconds</div>
      <div className='row'>
        <button
          className={`button button-primary button-primary-${
            isActive ? 'active' : 'inactive'
          }`}
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className='button' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
