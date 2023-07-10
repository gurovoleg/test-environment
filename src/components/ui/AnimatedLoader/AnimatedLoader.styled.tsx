import styled, { keyframes } from 'styled-components';
import { prop } from 'styled-tools';

const transformAnimation = keyframes`
  0% {
    top: 0;
    opacity: 0;
    width: 70%;
    transform: scale(0.6)
  }
  25% {
    top: 20%;
    opacity: 0.4;
  }
  50% {
    top: 40%;
    opacity: 1;
    width: 100%;
    transform: scale(1)
  }
  75% {
    top: 60%;
    opacity: 0.4;
  }
  100% {
    top: 80%;
    opacity: 0;
    width: 70%;
    transform: scale(0.6)
  }
`;

export const AnimationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //overflow: hidden;

  height: ${prop('height')}px;
  width: ${prop('height')}px;

  .square-block {
    width: ${prop('blockHeight')}px;
    background: ${prop('squareColor')};
  }
  .rectangle-block {
    background: ${prop('rectangleColor')};
  }

  > div {
    height: ${prop('blockHeight')}px;
    animation: ${transformAnimation} ${prop('speed')}s linear infinite;
  }

  div:nth-child(2) {
    animation-delay: ${({ elementDelay }) => elementDelay}s;
  }
  div:nth-child(3) {
    animation-delay: ${({ elementDelay }) => elementDelay * 2}s;
  }
  div:nth-child(4) {
    animation-delay: ${({ elementDelay }) => elementDelay * 3}s;
  }
  div:nth-child(5) {
    animation-delay: ${({ elementDelay }) => elementDelay * 4}s;
  }
`;

export const Square = styled.div`
  flex-shrink: 0;
  height: 100%;
`;

export const Rectangle = styled.div`
  height: 100%;
  width: 100%;
`;

export const AnimatedElementWrapper = styled.div`
  position: absolute;
  top: 0;
  opacity: 0;

  display: flex;
  gap: 15px;
  width: 100%;

  div {
    border-radius: 8px;
  }
`;
