import { RouteObject, Outlet } from 'react-router-dom';
import { testRoutes } from './test-routes';
import { LottieAnimation } from 'components/LottieAnimation';
import { Time } from 'pages';
import { PageLayout } from 'components/layouts/PageLayout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <PageLayout>
        <Outlet />
      </PageLayout>
    ),

    children: [
      {
        index: true,
        element: <Time />,
      },
      {
        path: 'lottie',
        element: <LottieAnimation />,
      },
      testRoutes,
    ],
  },

  {
    path: '*',
    element: <div>404 Not found</div>,
  },
];
