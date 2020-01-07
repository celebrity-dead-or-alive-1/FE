import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const { seconds, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called')
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dead or Alive Game</h1>
      <p>Time Remaining</p>
      <div style={{ fontSize: '100px' }}>
        :<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 20 seconds
          let t = new Date();
          t.setSeconds(t.getSeconds() + 21);
          restart(t);
        }}
      >
        restart
      </button>
    </div>
  );
}

export default function App() {
  let timeLeft = new Date();
  timeLeft.setSeconds(timeLeft.getSeconds() + 21); // 20 second timer
  return (
    <div>
      <MyTimer expiryTimestamp={timeLeft} />
    </div>
  );
}
