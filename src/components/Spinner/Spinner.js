import sunAnimation from 'assets/lotties/sun.json';
import { useLottie } from 'lottie-react';
import * as S from './Spinner.styled';
import { useEffect } from 'react';

export const LottieSpinner = ({ size }) => {
  const { View, setSpeed } = useLottie({ loop: true, animationData: sunAnimation });

  useEffect(() => {
    setSpeed(2);
  });

  return (
    <S.SpinnerWrapper size={size} className="">
      {View}
    </S.SpinnerWrapper>
  );
};

export const Spinner = ({ size, bgColor, color, inline }) => {
  const width = size && size >= 80 ? (size >= 100 ? 6 : 5) : size >= 30 ? 4 : 2;

  return (
    <S.SpinnerWrapper size={size} inline={inline}>
      <S.Circle color={bgColor} width={width} />
      <S.AnimatedCircle color={color} width={width} />
    </S.SpinnerWrapper>
  );
};
