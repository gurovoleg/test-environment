import { TimerWrapper, TimerButtonsWrapper } from './Timer.styled';
import { TimerDisplay } from './TimerDisplay';
import { TimerButton } from './TimerButton';
import { observer } from 'mobx-react';
import { useTimer, AbstractTimerStateType } from './abstract-timer-mobx';
// import { useTimer } from './abstract-timer-effector';

export const Timer = observer(
  ({
    name,
    isActive: isActiveFromProps,
  }: AbstractTimerStateType): JSX.Element => {
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
            withSpinner
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
