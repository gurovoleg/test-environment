import styled from 'styled-components';
import { CenteredStyles } from 'styles/global.styled';

export const TimerWrapper = styled.div`
  ${CenteredStyles};
  flex-direction: column;
  padding: 50px 0;
`;

export const TimerButtonsWrapper = styled.div`
  ${CenteredStyles};
  gap: 10px;
`;

export const TimerLabel = styled.div`
  font-size: 30px;
  line-height: 40px;
  color: lightGrey;
`;

export const TimerDisplay = styled.div`
  font-size: 30px;
  line-height: 40px;
  padding: 10px 0;
`;
