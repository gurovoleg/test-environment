import { useEffect, useState } from 'react';
import { Spinner } from 'components';

const ServerData = (): JSX.Element => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => {
          setData(result);
        }, 3000);
      });
  }, []);

  if (!data.length) {
    return <Spinner />;
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default ServerData;
