import * as S from './Spinner.styled';

export const Spinner = ({ size, bgColor, color, inline }) => {
  const width = size && size >= 80 ? (size >= 100 ? 6 : 5) : size >= 30 ? 4 : 2;

  return (
    <S.SpinnerWrapper size={size} inline={inline}>
      <S.Circle color={bgColor} width={width} />
      <S.AnimatedCircle color={color} width={width} />
    </S.SpinnerWrapper>
  );
};
