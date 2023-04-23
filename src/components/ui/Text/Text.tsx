import { ReactNode } from 'react';
import { TextStyled } from './Text.styled';

export type TextProps = {
  children?: ReactNode;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  color?: string;
  gradient?: boolean | string;
};

export const Text = ({ children, ...rest }: TextProps): JSX.Element => {
  return <TextStyled {...rest}>{children}</TextStyled>;
};

export const TextGradient = (props: TextProps): JSX.Element => {
  return <Text gradient {...props} />;
};

export const TextBold = (props: TextProps): JSX.Element => {
  return <Text fontWeight={700} {...props} />;
};

Text.Gradient = TextGradient;
Text.Bold = TextBold;
