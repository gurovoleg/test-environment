import { ComponentType, isValidElement, ReactNode } from 'react';

type TestComponentProps = {
  // 1. When we pass a Component, we should render it as a Component - <Component />
  component: ComponentType<{ size: number; inline?: boolean }>;
  // 2. When we pass function, we should render it as a function - sampleFunction()
  componentAsFunction: (size: number) => ReactNode;
  // 3. When we pass ReactElement (object), we should render it as it is (as object)
  reactElement: ReactNode;
};

export const TestComponentWithProps = ({
  component: Component,
  reactElement,
  componentAsFunction,
}: TestComponentProps): JSX.Element => {
  console.log(Component);
  console.log(typeof Component);
  console.log(isValidElement(Component));

  return (
    <>
      {/* 1. render as Component */}
      <Component size={70} inline />
      {/* 2. render as function */}
      {componentAsFunction(60)}
      {/* 3. render as it is */}
      {reactElement}
    </>
  );
};
