const Sample1 = (): JSX.Element => {
  return (
    <svg
      // width="50"
      // height="50"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" fill="blue" />
      <rect width="20" height="20" fill="red" x="20" />
      <rect width="20" height="20" fill="green" x="20" />
      <rect width="20" height="20" fill="orange" x="20" y="20" />
      <rect width="20" height="20" fill="black" x="40" y="40" />
    </svg>
  );
};

export const IconSample = (): JSX.Element => {
  return (
    <>
      <div style={{ width: '100px', height: '100px', border: '1px solid' }}>
        <Sample1 />
      </div>
      <div style={{ width: '200px', height: '200px', border: '1px solid' }}>
        <Sample1 />
      </div>
    </>
  );
};
