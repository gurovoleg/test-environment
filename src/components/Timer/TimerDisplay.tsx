import { useEffect, useState, memo } from 'react';
import * as S from './Timer.styled';
import { getTime } from 'utils/getTime';

let timerId: ReturnType<typeof setInterval>;

// memoized component to be excluded from TimerDisplay re-render
const TimerDisplayLabel = memo(() => <S.TimerLabel>Current time</S.TimerLabel>);

TimerDisplayLabel.displayName = 'TimerDisplayLabel';

export const TimerDisplay = ({ active }: { active: boolean }): JSX.Element => {
  const [date, setDate] = useState(getTime());

  useEffect(() => {
    if (active) {
      timerId = setInterval(() => {
        setDate(getTime());
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [active]);

  return (
    <>
      <TimerDisplayLabel />
      <S.TimerDisplay>{date}</S.TimerDisplay>
    </>
  );
};
