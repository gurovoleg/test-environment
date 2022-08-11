import styled, { css, keyframes } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

const circleAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  ${ifProp(
    'inline',
    css`
      position: relative;
    `,
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
  )};

  width: ${prop('size', '50')}px;
  height: ${prop('size', '50')}px;
`;

export const Circle = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-style: solid;
  border-color: ${prop('color', 'rgba(76, 76, 76, 0.3)')};
  border-width: ${prop('width', '2')}px;
`;

export const AnimatedCircle = styled(Circle)`
  border-color: transparent;
  border-top-color: ${prop('color', 'rgba(76, 76, 76)')};
  animation: ${circleAnimation} 0.8s linear infinite;
`;
