import { Timer } from '../Timer';
import { AppProvider } from 'core';
import { LottieAnimation } from '../LottieAnimation';
import { CenteredRowContainer } from 'styles/global.styled';

export const App = () => {
  return (
    <AppProvider>
      <CenteredRowContainer gap="20px">
        <Timer name="Moscow" />
        <Timer name="Timer-2" />
      </CenteredRowContainer>

      <LottieAnimation />
    </AppProvider>
  );
};
