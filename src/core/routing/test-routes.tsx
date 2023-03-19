import { User, IntersectionObserver } from 'pages';
import { RouteObject, Outlet } from 'react-router-dom';
import { PlaceholderLoading } from 'components/PlaceholderLoading';
import { TestComponentWithProps } from 'components/TestComponentWithProps';
import { Spinner } from 'components/Spinner';
import { PhoneNumber } from 'components/Mask/PhoneNumber';
import { TestWithError } from 'components/ErrorBoundary';

export const testRoutes: RouteObject = {
  path: 'test',
  element: (
    <div>
      <h1 style={{ margin: '20px 0' }}>Test page</h1>
      <Outlet />
    </div>
  ),
  children: [
    {
      path: 'placeholder',
      element: <PlaceholderLoading />,
    },
    {
      path: 'intersection-observer',
      element: <IntersectionObserver />,
    },
    {
      path: 'component',
      element: (
        // Testing Component props with different types
        <TestComponentWithProps
          reactElement={<Spinner inline />}
          componentAsFunction={(size) => <Spinner inline size={size} />}
          component={Spinner}
        />
      ),
    },
    {
      path: 'users',
      children: [
        {
          index: true,
          element: <div>Users page</div>,
          loader: async () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({ name: 'Oleg Gurov', age: 44 });
              }, 2000);
            });
            // throw json({ message: 'email is required' }, { status: 400 });
          },
        },
        {
          path: ':userId',
          element: <User />,
        },
      ],
    },
    {
      path: 'mask',
      element: <PhoneNumber />,
    },
    {
      path: 'error',
      element: <TestWithError />,
    },
  ],
};
