import { useLoaderData } from 'react-router-dom';

export const User = (): JSX.Element => {
  const data = useLoaderData();

  console.log('User loaderData', data);

  return <div>User</div>;
};
