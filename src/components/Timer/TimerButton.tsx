import { Spinner } from '../Spinner';
import { TimerButtonWithSpinner } from './Timer.styled';

export type TimerButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  label: string;
  disabled?: boolean;
  onClick(): void;
};

export const TimerButton = ({
  label,
  onClick,
  disabled,
  size = 'md',
}: TimerButtonProps): JSX.Element => {
  return (
    <TimerButtonWithSpinner
      size={size}
      className="timer-button"
      disabled={disabled}
      onClick={onClick}
    >
      {label} <Spinner size="16" bgColor="white" color="black" inline isActive={disabled} />
    </TimerButtonWithSpinner>
  );
};
