import { Timer } from '../Timer';
import { AppProvider } from 'core';
// import { LottieAnimation } from '../LottieAnimation';
import { CenteredRowContainer } from 'styles/global.styled';
import { IntersectionObservedComponent } from '../IntersectionObservedComponent';
import { LazyLoading } from '../LazyLoading';
import { Spinner } from '../Spinner';
import { TestComponentWithProps } from '../TestComponentWithProps';
import { PlaceholderLoading } from '../PlaceholderLoading';

const Separator = ({ height = '100px' }) => (
  <div style={{ height: height, background: 'orange' }}></div>
);

export const App = () => {
  return (
    <AppProvider>
      {/* Testing Component props with different types */}
      <TestComponentWithProps
        reactElement={<Spinner inline />}
        componentAsFunction={(size) => <Spinner inline size={size} />}
        component={Spinner}
      />

      <PlaceholderLoading />

      <CenteredRowContainer gap="20px">
        <Timer name="Moscow" />
        <Timer name="Timer-2" />
      </CenteredRowContainer>

      {/*<LottieAnimation />*/}
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
