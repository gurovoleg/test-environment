import styled, { css } from 'styled-components';
import { prop, theme, withProp } from 'styled-tools';
import { TextProps } from './Text';

export const TextWrapper = styled.div`
  margin-bottom: 10px;
`;

export const setGradientColorStyles = (gradientColor?: string) => css`
  background: ${gradientColor || theme('gradientColor')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TextStyled = styled.span<TextProps>`
  font-family: ${prop('fontFamily', theme('page.fontFamily'))};

  font-size: ${prop('fontSize', theme('page.fontSize'))}px;
  font-weight: ${prop('fontWeight', theme('page.fontWeight'))};
  line-height: ${prop('lineHeight', theme('page.lineHeight'))}px;
  color: ${prop('color', theme('page.color'))};

  ${withProp('gradient', (gradient) => {
    if (typeof gradient === 'string') {
      return setGradientColorStyles(gradient);
    } else if (gradient) {
      return setGradientColorStyles();
    }

    return null;
  })}
`;
