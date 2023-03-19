import { useState } from 'react';

export const TestWithError = (): JSX.Element => {
  const [user, setUser] = useState('Oleg Gurov');

  return (
    <div>
      <h2>Test component with error</h2>
      <h3>{user.toUpperCase()}</h3>
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Generate error
      </button>
    </div>
  );
};
