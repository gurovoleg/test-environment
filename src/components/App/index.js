import { Timer } from '../Timer';
import { AppProvider } from 'core';
import { Spinner } from '../Spinner';

export const App = () => {
  return (
    <AppProvider>
      <h1>App start page</h1>

      <Timer />

      <Spinner size="40" />
    </AppProvider>
  );
};
