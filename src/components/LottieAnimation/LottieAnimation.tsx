import Lottie, { LottieRef } from 'lottie-react';
import rabbitAnimation from '../../assets/lotties/hip-hop-waling-rabbit.json';
import { Spinner } from '../Spinner';
import * as S from './LottieAnimation.styled';
import { useEffect, useRef, useState } from 'react';
import { useTimer } from '../Timer/state';

export const LottieAnimation = (): JSX.Element => {
  const { isActive } = useTimer();
  const lottieRef: LottieRef = useRef();
  const [activeLottie, setActiveLottie] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActiveLottie(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      if (!isActive) {
        lottieRef.current.stop();
      } else {
        lottieRef.current.play();
      }
    }
  }, [isActive]);

  return activeLottie ? (
    <S.LottieAnimationWrapper>
      <Lottie lottieRef={lottieRef} animationData={rabbitAnimation} loop />
    </S.LottieAnimationWrapper>
  ) : (
    <Spinner size={40} />
  );
};
