import { NavBar, ErrorBoundary } from 'components';
import { PropsWithChildren } from 'react';
import { Error } from '../../pages';

export const PageLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div>
      <NavBar />
      <ErrorBoundary fallback={<Error />}>{children}</ErrorBoundary>
    </div>
  );
};