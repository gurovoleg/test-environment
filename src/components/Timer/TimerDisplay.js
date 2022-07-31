import { useEffect, useState, memo } from 'react';
import { getTime } from '../../utils/getTime';
import * as S from './Timer.styled';

let timerId = null;

// memoized component to be excluded from TimerDisplay re-render
const TimerDisplayLabel = memo(() => <S.TimerLabel>Current time</S.TimerLabel>);

TimerDisplayLabel.displayName = 'TimerDisplayLabel';

export const TimerDisplay = ({ active }) => {
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
