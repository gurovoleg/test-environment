import { TimerWrapper, TimerButtonsWrapper } from './Timer.styled';
import { TimerDisplay } from './TimerDisplay';
import { TimerButton } from './TimerButton';
import { useTimer } from './state';

export const Timer = () => {
  const { isActive, setActive } = useTimer();

  return (
    <TimerWrapper>
      <TimerDisplay active={isActive} />
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
};
