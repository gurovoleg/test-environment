import { useLoaderData } from 'react-router-dom';

export const User = (): JSX.Element => {
  const user = useLoaderData();

  console.log('User loaderData', user);

  return (
    <div>
      <h3>User page</h3>User
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
