import { TimerWrapper, TimerButtonsWrapper } from './Timer.styled';
import { TimerDisplay } from './TimerDisplay';
import { Button } from 'components/ui';
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
          <Button
            label="Start"
            className="timer-button"
            disabled={isActive}
            onClick={() => {
              setActive(true);
            }}
            withSpinner
          />
          <Button
            label="Stop"
            className="timer-button"
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
