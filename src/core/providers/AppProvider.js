import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../theme';

export const AppProvider = ({ children }) => {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};
