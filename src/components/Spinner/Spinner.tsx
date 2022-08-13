import * as S from './Spinner.styled';
import { SpinnerProps } from './types';

export const Spinner = ({ size, bgColor, color, inline }: SpinnerProps): JSX.Element => {
  const width = size && (size >= 80 ? (size >= 100 ? 6 : 5) : size >= 30 ? 4 : 2);

  return (
    <S.SpinnerWrapper size={size} inline={inline}>
      <S.Circle color={bgColor} width={width} />
      <S.AnimatedCircle color={color} width={width} />
    </S.SpinnerWrapper>
  );
};
