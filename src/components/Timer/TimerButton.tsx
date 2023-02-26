import { Spinner } from '../Spinner';
import { TimerButtonWithSpinner } from './Timer.styled';

export type TimerButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  label: string;
  disabled?: boolean;
  onClick(): void;
  withSpinner?: boolean;
};

export const TimerButton = ({
  label,
  onClick,
  disabled,
  size = 'md',
  withSpinner = false,
}: TimerButtonProps): JSX.Element => {
  return (
    <TimerButtonWithSpinner
      size={size}
      className="timer-button"
      disabled={disabled}
      onClick={onClick}
    >
      {label}&nbsp;
      {withSpinner && (
        <Spinner
          size="16"
          bgColor="white"
          color="black"
          inline
          isActive={disabled}
        />
      )}
    </TimerButtonWithSpinner>
  );
};
