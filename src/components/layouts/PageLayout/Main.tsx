import { PropsWithChildren } from 'react';
import { MainWrapper } from './PageLayout.styled';

export const Main = ({ children }: PropsWithChildren): JSX.Element => {
  return <MainWrapper>{children}</MainWrapper>;
};
