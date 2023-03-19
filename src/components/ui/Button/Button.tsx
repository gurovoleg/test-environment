import * as S from './Button.styled';
import { Spinner } from '../Spinner';

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  label: string;
  disabled?: boolean;
  onClick(): void;
  withSpinner?: boolean;
  className?: string;
};

export const Button = ({
  label,
  onClick,
  disabled,
  size = 'md',
  withSpinner = false,
  ...rest
}: ButtonProps): JSX.Element => {
  if (!withSpinner) {
    return (
      <S.Button size={size} disabled={disabled} onClick={onClick} {...rest}>
        {label}
      </S.Button>
    );
  }

  return (
    <S.ButtonWithSpinner
      size={size}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {label}&nbsp;
      <Spinner
        size="16"
        bgColor="white"
        color="black"
        inline
        isActive={disabled}
      />
    </S.ButtonWithSpinner>
  );
};
