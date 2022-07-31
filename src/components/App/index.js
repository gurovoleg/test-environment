import { Timer } from '../Timer';
import { AppProvider } from 'core';

export const App = () => {
  return (
    <AppProvider>
      <h1>App start page</h1>

      <Timer someProp="test" />
    </AppProvider>
  );
};
