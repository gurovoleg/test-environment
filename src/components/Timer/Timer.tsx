import { TimerWrapper, TimerButtonsWrapper } from './Timer.styled';
import { TimerDisplay } from './TimerDisplay';
import { TimerButton } from './TimerButton';
import { observer } from 'mobx-react';
//import { useTimer } from './abstract-timer-mobx';
import { useTimer } from './abstract-timer-effector';
import { AbstractTimerStateType } from './abstract-timer-mobx';

export const Timer = observer(
  ({ name, isActive: isActiveFromProps }: AbstractTimerStateType): JSX.Element => {
    const { isActive, setActive } = useTimer(name, isActiveFromProps);

    return (
      <TimerWrapper>
        <TimerDisplay active={isActive} label={name} />
        <TimerButtonsWrapper>
          <TimerButton
            label="Start"
            disabled={isActive}
            onClick={() => {
              setActive(true);
            }}
          />
          <TimerButton
            label="Stop"
            disabled={!isActive}
            onClick={() => {
              setActive(false);
            }}
          />
        </TimerButtonsWrapper>
      </TimerWrapper>
    );
  }
);
