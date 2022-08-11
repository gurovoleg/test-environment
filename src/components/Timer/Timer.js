import { useState } from 'react';
import { TimerButton, TimerWrapper, TimerButtonWithSpinner } from './Timer.styled';
import { TimerDisplay } from './TimerDisplay';
import { Spinner } from '../Spinner';

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
        Start
      </TimerButton>

      <TimerButtonWithSpinner
        className="timer-button"
        onClick={() => {
          clearInterval(timerId);
          setTimerActive(false);
        }}
      >
        Stop <Spinner size="20" bgColor="white" color="black" inline />
      </TimerButtonWithSpinner>
    </TimerWrapper>
  );
};
