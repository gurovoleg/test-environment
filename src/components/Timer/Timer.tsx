import { useState } from 'react';
import { TimerWrapper, TimerButtonsWrapper } from './Timer.styled';
import { TimerDisplay } from './TimerDisplay';
import { TimerButton } from './TimerButton';

export const Timer = () => {
  const [timerActive, setTimerActive] = useState(true);

  return (
    <TimerWrapper>
      <TimerDisplay active={timerActive} />
      <TimerButtonsWrapper>
        <TimerButton
          label="Start"
          disabled={timerActive}
          onClick={() => {
            setTimerActive(true);
          }}
        />
        <TimerButton
          label="Stop"
          disabled={!timerActive}
          onClick={() => {
            setTimerActive(false);
          }}
        />
      </TimerButtonsWrapper>
    </TimerWrapper>
  );
};
