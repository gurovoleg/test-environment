import styled from 'styled-components';
import { theme } from 'styled-tools';

export const TimerWrapper = styled.div`
  .timer-button {
    margin-right: 10px;
  }
`;

export const TimerButton = styled.div`
  display: inline-block;
  padding: ${theme('button.padding')};
  border-radius: 8px;
  background: ${theme('button.bgColor')};
  color: ${theme('button.color')};
  cursor: pointer;
`;

export const TimerLabel = styled.div`
  color: lightGrey;
`;

export const TimerDisplay = styled.div`
  font-size: 30px;
  line-height: 40px;
`;
