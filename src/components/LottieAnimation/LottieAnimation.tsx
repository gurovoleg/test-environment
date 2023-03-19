import Lottie, { LottieRef } from 'lottie-react';
import rabbitAnimation from '../../assets/lotties/hip-hop-waling-rabbit.json';
import { Spinner } from 'components';
import * as S from './LottieAnimation.styled';
import { useEffect, useRef, useState } from 'react';

export const LottieAnimation = (): JSX.Element => {
  const lottieRef: LottieRef = useRef();
  const [activeLottie, setActiveLottie] = useState(false);
  const [isActive, setActive] = useState(true);

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
    <S.LottieAnimationWrapper onClick={() => setActive((active) => !active)}>
      <Lottie lottieRef={lottieRef} animationData={rabbitAnimation} loop />
    </S.LottieAnimationWrapper>
  ) : (
    <Spinner size={40} />
  );
};
