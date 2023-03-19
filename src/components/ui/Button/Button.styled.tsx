import styled, { css } from 'styled-components';
import { theme, withProp } from 'styled-tools';
import { SpinnerWrapper } from 'components/ui/Spinner/Spinner.styled';
import { ButtonProps } from './Button';

export const Button = styled.button<Pick<ButtonProps, 'size'>>`
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

export const ButtonWithSpinner = styled(Button)`
  ${SpinnerWrapper} {
    margin-left: 10px;
  }
`;
