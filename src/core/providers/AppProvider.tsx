import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../theme';
import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};
