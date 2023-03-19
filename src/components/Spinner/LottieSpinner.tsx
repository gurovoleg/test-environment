import { useLottie } from 'lottie-react';
import sunAnimation from '../../assets/lotties/sun.json';
import { useEffect } from 'react';
import * as S from './Spinner.styled';
import { SpinnerProps } from './types';

export const LottieSpinner = ({ size }: SpinnerProps): JSX.Element => {
  const { View, setSpeed } = useLottie({
    loop: true,
    animationData: sunAnimation,
  });

  useEffect(() => {
    setSpeed(2);
  });

  return <S.SpinnerWrapper size={size}>{View}</S.SpinnerWrapper>;
};
