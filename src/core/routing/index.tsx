import { RouteObject } from 'react-router-dom';
import { testRoutes } from './test-routes';
import { LottieAnimation } from 'components/LottieAnimation';
import { Time } from 'pages';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Time />,
  },
  {
    path: 'lottie',
    element: <LottieAnimation />,
  },
  {
    path: '*',
    element: <div>404 Not found</div>,
  },
  testRoutes,
];
