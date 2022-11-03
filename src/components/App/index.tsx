import { Timer } from '../Timer';
import { AppProvider } from 'core';
import { LottieAnimation } from '../LottieAnimation';
import { CenteredRowContainer } from 'styles/global.styled';
import { IntersectionObservedComponent } from '../IntersectionObservedComponent';
import { LazyLoading } from '../LazyLoading';

const Separator = ({ height = '100px' }) => (
  <div style={{ height: height, background: 'orange' }}></div>
);

export const App = () => {
  return (
    <AppProvider>
      <CenteredRowContainer gap="20px">
        <Timer name="Moscow" />
        <Timer name="Timer-2" />
      </CenteredRowContainer>

      <LottieAnimation />
      <Separator />

      <IntersectionObservedComponent />
      <Separator />

      <IntersectionObservedComponent />
      <Separator />

      <LazyLoading />
      <Separator />
    </AppProvider>
  );
};
