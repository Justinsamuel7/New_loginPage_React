import React, { useState, useEffect } from 'react';
import './style.css';

export default function Timer() {
  const [sec, setSec] = useState(0);
  const [showTimer, setShowTimer] = useState(false);

  const getSecond = (e) => {
    setSec(Number(e.target.value));
  };

  const startCountDown = () => {
    setShowTimer(true);
    setInterval(() => {
      setSec((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);

  };

  return (
    <>
      <h1>Count Down Timer</h1>

      <input type="number" placeholder="Enter Seconds" onChange={getSecond} />
      <button onClick={startCountDown}>Start</button>
      <h3>{showTimer ? sec : ''}</h3>
    </>
  );
}
