import { ErrorBoundary } from 'components';
import { PropsWithChildren } from 'react';
import { Error } from 'pages';
import { Header } from './Header';
import { Aside } from './Aside';
import { Main } from './Main';
import { Wrapper } from './PageLayout.styled';

export const PageLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ErrorBoundary fallback={Error}>
      <Wrapper>
        <Header />
        <Aside />
        <Main>{children}</Main>
      </Wrapper>
    </ErrorBoundary>
  );
};
