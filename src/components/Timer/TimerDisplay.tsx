import { useEffect, useState, memo } from 'react';
import * as S from './Timer.styled';
import { getTime } from 'utils/getTime';
import { observer } from 'mobx-react';

type TimerDisplayLabel = {
  label: string;
};

// memoized component to be excluded from TimerDisplay re-render
const TimerDisplayLabel = memo(({ label = 'Current time' }: TimerDisplayLabel) => (
  <S.TimerLabel>{label}</S.TimerLabel>
));

TimerDisplayLabel.displayName = 'TimerDisplayLabel';

type TimerDisplayType = {
  active: boolean;
  label?: string;
};

export const TimerDisplay = observer(({ active, label }: TimerDisplayType): JSX.Element => {
  const [date, setDate] = useState(getTime());

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;

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
      <TimerDisplayLabel label={label} />
      <S.TimerDisplay>{date}</S.TimerDisplay>
    </>
  );
});
