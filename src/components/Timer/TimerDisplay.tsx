import { useEffect, useState, memo } from 'react';
import * as S from './Timer.styled';
import { convertToTimeString } from 'utils';
import { observer } from 'mobx-react';

type TimerDisplayLabel = {
  label: string;
};

// memoized component to be excluded from TimerDisplay re-render
const TimerDisplayLabel = memo(({ label = 'Timer 1' }: TimerDisplayLabel) => (
  <S.TimerLabel>{label}</S.TimerLabel>
));

TimerDisplayLabel.displayName = 'TimerDisplayLabel';

type TimerDisplayType = {
  active: boolean;
  label?: string;
};

export const TimerDisplay = observer(
  ({ active, label }: TimerDisplayType): JSX.Element => {
    const startValue = Date.now();
    const [value, setValue] = useState(0);
    const [addValue, setAddValue] = useState(0);

    useEffect(() => {
      let timerId: ReturnType<typeof setInterval>;

      if (active) {
        timerId = setInterval(() => {
          // we calculate difference between start time value and current time value as it 100% guarantees the correctness of timer
          setValue(Date.now() - startValue + addValue);
        }, 1000);
      } else {
        // we need to fix passed time to add it on the next start of timer
        setAddValue(value);
      }

      return () => {
        clearInterval(timerId);
      };
    }, [active]);

    return (
      <>
        <TimerDisplayLabel label={label} />
        <S.TimerDisplay>{convertToTimeString(value)}</S.TimerDisplay>
      </>
    );
  }
);
