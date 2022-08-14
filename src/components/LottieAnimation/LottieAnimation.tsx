import Lottie from 'lottie-react';
import rabbitAnimation from '../../assets/lotties/hip-hop-waling-rabbit.json';
import { Spinner } from '../Spinner';
import * as S from './LottieAnimation.styled';
import { useEffect, useState } from 'react';

export const LottieAnimation = (): JSX.Element => {
  const [activeLottie, setActiveLottie] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActiveLottie(true);
    }, 5000);
  }, []);

  return activeLottie ? (
    <S.LottieAnimationWrapper>
      <Lottie animationData={rabbitAnimation} loop />
    </S.LottieAnimationWrapper>
  ) : (
    <Spinner size={40} />
  );
};
