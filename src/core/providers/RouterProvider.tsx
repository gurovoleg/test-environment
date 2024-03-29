import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';
import { routes } from '../routing';
import { Spinner } from 'components';

const router = createBrowserRouter(routes);

export const RouterProvider = (): JSX.Element => {
  console.log('RouterProvider render');

  return (
    <ReactRouterProvider
      router={router}
      fallbackElement={<Spinner size={30} />}
    />
  );
};
