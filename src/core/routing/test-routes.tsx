import { User, IntersectionObserver } from 'pages';
import { RouteObject, Outlet } from 'react-router-dom';
import { PlaceholderLoading } from 'components/PlaceholderLoading';
import { TestComponentWithProps } from 'components/TestComponentWithProps';
import { Spinner } from 'components/ui/Spinner';
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
      path: 'mask',
      element: <PhoneNumber />,
    },
    {
      path: 'error',
      element: <TestWithError />,
    },
    {
      path: 'users',
      children: [
        {
          index: true,
          element: <div>Users page</div>,
        },
        {
          path: ':userId',
          id: '2',
          element: <User />,
          loader: async ({ params }) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({ name: 'Oleg Gurov', age: 44, id: params.userId });
              }, 2000);
            });
            // throw json({ message: 'email is required' }, { status: 400 });
          },
        },
      ],
    },
  ],
};
