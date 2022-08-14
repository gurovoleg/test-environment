import { Timer } from '../Timer';
import { AppProvider } from 'core';
import { LottieAnimation } from '../LottieAnimation';

export const App = () => {
  return (
    <AppProvider>
      <Timer />
      <LottieAnimation />
    </AppProvider>
  );
};
