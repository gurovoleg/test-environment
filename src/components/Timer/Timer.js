import { useState } from 'react';
import { TimerButton, TimerWrapper } from './Timer.styled';
import { TimerDisplay } from './TimerDisplay';

let timerId = null;

export const Timer = () => {
  const [timerActive, setTimerActive] = useState(true);

  return (
    <TimerWrapper>
      <TimerDisplay active={timerActive} />

      <TimerButton
        className="timer-button"
        onClick={() => {
          setTimerActive(true);
        }}
      >
        start
      </TimerButton>

      <TimerButton
        className="timer-button"
        onClick={() => {
          clearInterval(timerId);
          setTimerActive(false);
        }}
      >
        stop
      </TimerButton>
    </TimerWrapper>
  );
};
