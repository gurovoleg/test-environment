import styled, { css } from 'styled-components';
import { theme, withProp } from 'styled-tools';
import { SpinnerWrapper } from '../Spinner/Spinner.styled';
import { CenteredStyles } from 'styles/global.styled';
import { TimerButtonProps } from './TimerButton';

export const TimerWrapper = styled.div`
  ${CenteredStyles};
  flex-direction: column;
  padding: 50px 0;
`;

export const TimerButtonsWrapper = styled.div`
  ${CenteredStyles};
  gap: 10px;
`;

export const TimerButton = styled.button<Pick<TimerButtonProps, 'size'>>`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background: ${theme('button.bgColor')};
  color: ${theme('button.color')};
  cursor: pointer;

  font-size: 12px;
  line-height: 16px;
  padding: 7px 12px;

  ${withProp(
    'size',
    (size) => css`
      font-size: ${theme(`button.size.${size}.fontSize`)};
      line-height: ${theme(`button.size.${size}.lineHeight`)};
      padding: ${theme(`button.size.${size}.padding`)};
    `
  )}

  &:disabled {
    filter: opacity(70%);
    cursor: not-allowed;
  }
`;

export const TimerButtonWithSpinner = styled(TimerButton)`
  ${SpinnerWrapper} {
    margin-left: 10px;
  }
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
