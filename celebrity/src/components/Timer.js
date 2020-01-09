import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expireTimestamp }) {
  const { seconds, start, pause, resume, restart } = useTimer({
    expireTimestamp,
    onExpire: () => console.warn('onExpire called')
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <p>Time Remaining</p>
      <div style={{ fontSize: '100px' }}>
        :<span>{seconds}</span>
      </div>
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
      <button
        onClick={() => {
          // Restarts to 20 seconds
          let t = new Date();
          t.setSeconds(t.getSeconds() + 61);
          restart(t);
        }}
      >
        Start Timer
      </button>
    </div>
  );
}

export default function App() {
  let timeLeft = new Date();
  timeLeft.setSeconds(timeLeft.getSeconds() + 61); // 20 second timer
  return (
    <div>
      <MyTimer expireTimestamp={timeLeft} />
    </div>
  );
}
