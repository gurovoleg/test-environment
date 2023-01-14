import { AppProvider, RouterProvider } from 'core';

export const App = () => {
  return (
    <AppProvider>
      <RouterProvider />
    </AppProvider>
  );
};
