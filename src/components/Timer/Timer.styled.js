import styled from 'styled-components';
import { theme } from 'styled-tools';
import { SpinnerWrapper } from '../Spinner/Spinner.styled';

export const TimerWrapper = styled.div`
  .timer-button {
    margin-right: 10px;
  }
`;

export const TimerButton = styled.div`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${theme('button.padding')};
  border-radius: 8px;
  background: ${theme('button.bgColor')};
  color: ${theme('button.color')};
  cursor: pointer;

  font-size: 16px;
  line-height: 24px;
`;

export const TimerButtonWithSpinner = styled(TimerButton)`
  ${SpinnerWrapper} {
    margin-left: 10px;
  }
`;

export const TimerLabel = styled.div`
  color: lightGrey;
`;

export const TimerDisplay = styled.div`
  font-size: 30px;
  line-height: 40px;
`;
